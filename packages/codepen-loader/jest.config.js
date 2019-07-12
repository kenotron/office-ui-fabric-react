const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testRegex: '/__tests__/.*\\.test\\.ts$',
  reporters: [path.resolve(__dirname, '../../scripts/jest/jest-reporter.js')],
  globals: {
    'ts-jest': {
      tsConfig: path.resolve(process.cwd(), 'tsconfig.json'),
      packageJson: path.resolve(process.cwd(), 'package.json'),
      diagnostics: false
    }
  }
};
