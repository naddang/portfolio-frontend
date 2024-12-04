const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'module-resolver',
    {
      extensions: ['.js', '.jsx']
    }
  ])
);