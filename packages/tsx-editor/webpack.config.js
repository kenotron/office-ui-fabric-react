const path = require('path');
const resources = require('@uifabric/build/webpack/webpack-resources');
const { addMonacoConfig } = require('./scripts/monaco-webpack');

const BUNDLE_NAME = 'tsx-editor';
const IS_PRODUCTION = process.argv.indexOf('--production') > -1;

module.exports = resources.createConfig(BUNDLE_NAME, IS_PRODUCTION, {
  entry: {
    [BUNDLE_NAME]: './lib/index.js'
  },

  output: {
    libraryTarget: 'var',
    library: 'FabricTsxEditor'
  },

  externals: [{ react: 'React' }, { 'react-dom': 'ReactDOM' }],

  resolve: {
    alias: {
      '@uifabric/tsx-editor/src': path.join(__dirname, 'src'),
      '@uifabric/tsx-editor/lib': path.join(__dirname, 'lib'),
      '@uifabric/tsx-editor': path.join(__dirname, 'lib')
    }
  }
});
