const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const findGitRoot = require('../monorepo/findGitRoot');
const { spawnSync } = require('child_process');
const glob = require('glob');

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'fluent-import'));
console.log(`using temp dir: ${tmp}`);

function git(args, options) {
  args = args || [];
  options = { cwd: tmp, ...options };
  const results = spawnSync('git', args, options);
  if (results.error) {
    throw new Error(results.stderr.toString());
  }

  return results.stdout
    .toString()
    .split(/\n/)
    .filter(n => n);
}

function importFuiPackages(outputPath) {
  console.log('copying packages from /packages');
  for (let packageName of fs.readdirSync(path.join(tmp, 'packages'))) {
    const src = path.join(tmp, 'packages', packageName);
    const dest = path.join(outputPath, packageName);

    console.log(`copy ${src} --> ${dest}`);
    fs.copySync(src, dest, { overwrite: true, recursive: true });
  }
}

function importFuiTopLevelPackages(outputPath) {
  const topLevelPackages = ['docs', 'e2e', 'perf'];

  console.log('copying top level packages from /packages');
  for (let packageName of topLevelPackages) {
    const src = path.join(tmp, packageName);
    const dest = path.join(outputPath, packageName);

    console.log(`copy ${src} --> ${dest}`);
    fs.copySync(src, dest, { overwrite: true, recursive: true });
  }
}

function importGithubMD(root) {
  const mdFiles = [
    '.github/CONTRIBUTING.md',
    '.github/setup-local-development.md',
    '.github/add-a-feature.md',
    '.github/document-a-feature.md',
    '.github/test-a-feature.md'
  ];
  for (let mdFile of mdFiles) {
    if (mdFile.endsWith('.md')) {
      const src = path.join(tmp, mdFile);
      const dest = path.join(root, mdFile);
      fs.copyFileSync(src, dest);
    }
  }
}

function rewriteImports(outputPath) {
  let files = glob.sync('**/*.+(js|ts|tsx|json)', { cwd: outputPath });

  // Include finely scoped hidden files.
  files = files.concat(glob.sync('**/.digest/*.+(js|ts|tsx|json)', { cwd: outputPath }));

  for (let file of files) {
    const fullPath = path.join(outputPath, file);
    const content = fs.readFileSync(fullPath, 'utf-8');
    if (content.includes('@fluentui/internal-tooling')) {
      console.log(`patching up ${fullPath}`);
      fs.writeFileSync(fullPath, content.replace('@fluentui/internal-tooling', '@uifabric/build'));
    }
    if (content.includes('../../../docs/')) {
      console.log(`patching up ${fullPath}`);
      fs.writeFileSync(fullPath, content.replace('../../../docs/', '../../docs/'));
    }
  }
}

function updateMonorepoConfigs(root) {
  const pkgFile = path.join(__dirname, '../../package.json');
  const pkgJson = fs.readJSONSync(pkgFile);
  if (!pkgJson.workspaces.packages.includes('packages/fluentui/*')) {
    pkgJson.workspaces.packages.push('packages/fluentui/*');
  }
  fs.writeJSONSync(pkgFile, pkgJson, { spaces: 2 });

  const lernaFile = path.join(__dirname, '../../lerna.json');
  const lernaJson = fs.readJSONSync(lernaFile);
  if (!lernaJson.packages.includes('packages/fluentui/*')) {
    lernaJson.packages.push('packages/fluentui/*');
  }
  fs.writeJSONSync(lernaFile, lernaJson, { spaces: 2 });
}

function fixScriptsVersion(outputPath) {
  const files = glob.sync('**/package.json', { cwd: outputPath });
  for (let file of files) {
    const fullPath = path.join(outputPath, file);
    console.log(`fixing ${fullPath} for scripts version`);
    const pkgJson = fs.readJSONSync(fullPath);
    if (pkgJson.devDependencies && pkgJson.devDependencies['@uifabric/build']) {
      pkgJson.devDependencies['@uifabric/build'] = '^7.0.0';
    }
    fs.writeJSONSync(fullPath, pkgJson, { spaces: 2 });
  }
}

function fixTsConfigs(outputPath) {
  const files = glob.sync('**/tsconfig.json', { cwd: outputPath });

  const mapping = {
    '@fluentui/*': ['packages/fluentui/*/src/index'],
    'docs/*': ['packages/fluentui/docs/*'],
    'src/*': ['packages/fluentui/react/src/*'],
    'test/*': ['packages/fluentui/react/test/*']
  };

  for (let file of files) {
    console.log(`fixing ${file}`);
    const fullPath = path.join(outputPath, file);
    const tsconfig = fs.readJSONSync(fullPath);

    if (tsconfig.compilerOptions && tsconfig.compilerOptions.paths) {
      for (let [source, paths] of Object.entries(tsconfig.compilerOptions.paths)) {
        if (Object.keys(mapping).includes(source)) {
          tsconfig.compilerOptions.paths[source] = mapping[source];
        }
      }
    }

    // TODO (fui repo merge): we need to unify behind a single set of tsconfig (as it is, we will have 3)
    if (tsconfig.extends) {
      if (tsconfig.extends.includes('../build')) {
        // TODO (fui repo merge): we need to switch to using @uifabric/build for this later
        tsconfig.extends = '../../../scripts/typescript/tsconfig.fluentui';
      } else {
        tsconfig.extends = '@uifabric/build/typescript/tsconfig.common';
      }
    }

    if (tsconfig.compilerOptions && tsconfig.compilerOptions.typeRoots) {
      const typesIndex = tsconfig.compilerOptions.typeRoots.indexOf('../types');
      if (typesIndex > -1) {
        tsconfig.compilerOptions.typeRoots[typesIndex] = '../../../typings';
      }
    }

    fs.writeJSONSync(fullPath, tsconfig, { spaces: 2 });
  }
}

function fixGulp(outputPath) {
  const files = glob.sync('**/.gulp.js', { cwd: outputPath });

  for (let file of files) {
    console.log(`fixing ${file}`);
    const fullPath = path.join(outputPath, file);
    let content = fs.readFileSync(fullPath, 'utf-8');
    content = content.replace('../../.gulp', '@uifabric/build/gulp/.gulp');
    fs.writeFileSync(fullPath, content);
  }

  const gulpfiles = glob.sync('**/gulpfile.ts', { cwd: outputPath });

  for (let file of gulpfiles) {
    console.log(`fixing ${file}`);
    const fullPath = path.join(outputPath, file);
    let content = fs.readFileSync(fullPath, 'utf-8');
    content = content.replace('../../gulpfile', '../../../gulpfile');
    fs.writeFileSync(fullPath, content);
  }
}

function fixEslint(outputPath) {
  const files = glob.sync('**/.eslintrc.json', { cwd: outputPath });

  for (let file of files) {
    console.log(`fixing ${file}`);
    const fullPath = path.join(outputPath, file);
    const content = fs.readJSONSync(fullPath, 'utf-8');

    // TODO (fui repo merge): create a @uifabric/eslint-config package to host this per: https://eslint.org/docs/developer-guide/shareable-configs
    content.extends = ['../../../scripts/eslint/index'];
    fs.writeJSONSync(fullPath, content, { spaces: 2 });
  }

  const eslintPkgJsonFile = path.join(outputPath, 'eslint-plugin/package.json');
  let eslintPkgJson = fs.readJsonSync(eslintPkgJsonFile);
  eslintPkgJson.dependencies = {
    '@typescript-eslint/eslint-plugin': '2.8.0',
    '@typescript-eslint/experimental-utils': '2.8.0'
  };
  fs.writeJsonSync(eslintPkgJsonFile, eslintPkgJson, { spaces: 2 });
}

function fixScriptsPackageName(outputPath) {
  const files = glob.sync('**/*.+(ts|js|json)', { cwd: outputPath });

  for (let file of files) {
    const fullPath = path.join(outputPath, file);
    let content = fs.readFileSync(fullPath, 'utf-8');

    if (content.includes('@fluentui/scripts')) {
      console.log(`fixing ${file}`);
      content = content.replace(/@fluentui\/scripts/g, '@uifabric/build');
      fs.writeFileSync(fullPath, content);
    }
  }
}

function fixTypings(outputPath) {
  const files = glob.sync('**/package.json', { cwd: outputPath });

  const devDependencies = {
    '@types/react': '16.8.11'
  };

  for (let file of files) {
    const fullPath = path.join(outputPath, file);
    console.log(`fixing ${fullPath} for typing`);
    const pkgJson = fs.readJSONSync(fullPath);
    if (pkgJson.devDependencies && pkgJson.devDependencies['@uifabric/build']) {
      pkgJson.devDependencies = { ...pkgJson.devDependencies, ...devDependencies };
    }
    fs.writeJSONSync(fullPath, pkgJson, { spaces: 2 });
  }
}

function fixPrivatePackageFlag(outputPath) {
  const files = glob.sync('**/package.json', { cwd: outputPath });

  for (let file of files) {
    const fullPath = path.join(outputPath, file);
    console.log(`fixing ${fullPath} for private packages (for now)`);
    const pkgJson = fs.readJSONSync(fullPath);
    pkgJson.private = true;
    fs.writeJSONSync(fullPath, pkgJson, { spaces: 2 });
  }
}

/** this has to be fixed because keyboard-keys has incompatible typings in the latest release */
function fixKeyboardKeys(outputPath) {
  const files = glob.sync('**/package.json', { cwd: outputPath });

  for (let file of files) {
    const fullPath = path.join(outputPath, file);
    console.log(`fixing ${fullPath} for private packages (for now)`);
    const pkgJson = fs.readJSONSync(fullPath);

    if (pkgJson.dependencies && pkgJson.dependencies['keyboard-key']) {
      pkgJson.dependencies['keyboard-key'] = '1.0.1';
    }

    fs.writeJSONSync(fullPath, pkgJson, { spaces: 2 });
  }
}

function fixPlayground(outputPath) {
  const devDeps = {
    '@types/jest-environment-puppeteer': '^4.3.1',
    '@types/expect-puppeteer': '^4.4.0',
    enzyme: '~3.10.0',
    'enzyme-adapter-react-16': '^1.15.0'
  };

  const fullPath = path.join(outputPath, 'playground', 'package.json');
  console.log(`fixing ${fullPath} for devdeps`);
  const pkgJson = fs.readJSONSync(fullPath);
  pkgJson.devDependencies = { ...pkgJson.devDependencies, ...devDeps };
  fs.writeJSONSync(fullPath, pkgJson, { spaces: 2 });
}

function fixReactDep(outputPath) {
  const files = glob.sync('**/package.json', { cwd: outputPath });

  for (let file of files) {
    const fullPath = path.join(outputPath, file);
    console.log(`fixing ${fullPath} for react`);
    const pkgJson = fs.readJSONSync(fullPath);
    if (pkgJson.dependencies && pkgJson.dependencies.react) {
      delete pkgJson.dependencies.react;
      pkgJson.devDependencies.react = '16.8.6';
    }

    if (pkgJson.dependencies && pkgJson.dependencies['react-dom']) {
      delete pkgJson.dependencies['react-dom'];
      pkgJson.devDependencies['react-dom'] = '16.8.6';
    }

    if (pkgJson.devDependencies && pkgJson.devDependencies.react) {
      pkgJson.devDependencies.react = '16.8.6';
    }

    if (pkgJson.devDependencies && pkgJson.devDependencies['react-dom']) {
      pkgJson.devDependencies['react-dom'] = '16.8.6';
    }

    fs.writeJSONSync(fullPath, pkgJson, { spaces: 2 });
  }
}

function fixJestMapping(outputPath) {
  const files = glob.sync('**/jest.config.js', { cwd: outputPath });

  for (let file of files) {
    const fullPath = path.join(outputPath, file);
    console.log(`fixing ${fullPath} to fix docs links`);
    let jestConfig = fs.readFileSync(fullPath, 'utf-8');

    if (jestConfig.includes('<rootDir>/../../docs/$1')) {
      jestConfig = jestConfig.replace('<rootDir>/../../docs/$1', '<rootDir>/../docs/$1');
    }

    fs.writeFileSync(fullPath, jestConfig);
  }
}

function fixDocs(outputPath) {
  const files = glob.sync('**/docs/**/*.+(ts|tsx)', { cwd: outputPath });

  for (let file of files) {
    const fullPath = path.join(outputPath, file);

    let contents = fs.readFileSync(fullPath, 'utf-8');

    if (contents.includes('packages/react/package.json')) {
      console.log(`fixing ${fullPath} to fix docs import of @fluentui/react/package.json`);
      contents = contents.replace(/'[\.\/]+packages\/react\/package\.json'/, "'@fluentui/react/package.json'");
    }

    fs.writeFileSync(fullPath, contents);
  }

  const docsPackageJsonFile = path.join(outputPath, 'docs/package.json');
  const docsPackageJson = fs.readJsonSync(docsPackageJsonFile);
  docsPackageJson.scripts = {
    start: 'gulp docs'
  };
  fs.writeJsonSync(docsPackageJsonFile, docsPackageJson, { spaces: 2 });
}

function fixInternalPackageDeps(outputPath) {
  const getAllPackageInfo = require('../monorepo/getAllPackageInfo');
  const files = glob.sync('**/package.json', { cwd: outputPath });

  const allPackages = getAllPackageInfo();
  const fabricPackages = Object.keys(allPackages)
    .filter(p => !p.startsWith('@fluentui'))
    .reduce((pkgs, pkg) => {
      return { ...pkgs, [pkg]: allPackages[pkg] };
    }, {});

  for (let file of files) {
    const fullPath = path.join(outputPath, file);
    const pkgJson = fs.readJsonSync(fullPath);

    for (const depType of ['dependencies', 'devDependencies']) {
      if (pkgJson[depType]) {
        for (let dep of Object.keys(pkgJson[depType])) {
          if (fabricPackages[dep]) {
            const range = pkgJson[depType][dep][0];
            pkgJson[depType][dep] = `${/^[^~]/.test(range) ? range : ''}${fabricPackages[dep].packageJson.version}`;
          }
        }
      }
    }

    fs.writeJsonSync(fullPath, pkgJson, { spaces: 2 });
  }
}

function importFluent() {
  console.log('cloning FUI');
  git(['clone', '--depth=1', 'https://github.com/microsoft/fluent-ui-react.git', '.']);

  const root = findGitRoot();
  const outputPath = path.join(root, 'packages/fluentui');
  if (fs.existsSync(outputPath)) {
    fs.removeSync(outputPath);
  }
  fs.mkdirpSync(outputPath);

  importFuiPackages(outputPath);
  importFuiTopLevelPackages(outputPath);
  importGithubMD(root);

  updateMonorepoConfigs(root);

  rewriteImports(outputPath);
  fixScriptsPackageName(outputPath);
  fixScriptsVersion(outputPath);
  fixTsConfigs(outputPath);
  fixGulp(outputPath);
  fixEslint(outputPath);
  fixTypings(outputPath);
  fixPrivatePackageFlag(outputPath);
  fixPlayground(outputPath);
  fixKeyboardKeys(outputPath);
  fixReactDep(outputPath);
  fixJestMapping(outputPath);
  fixDocs(outputPath);
  fixInternalPackageDeps(outputPath);

  console.log('removing tmp');
  fs.removeSync(tmp);

  spawnSync('yarn', { cwd: root, stdio: 'inherit' });
  spawnSync('git', ['add', '.'], { cwd: root });
  spawnSync('yarn', ['lint-staged'], { cwd: root, stdio: 'inherit' });
}

importFluent();
