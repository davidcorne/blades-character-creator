const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/'),
  },

  entry: {
    // The Pug file is the entry-point for all scripts and styles.
    // Source scripts and styles must be specified directly in Pug.
    // Do not need to define JS and SCSS in the webpack entry.

    index: './src/views/index.pug',      // output dist/index.html
  },

  plugins: [
    // enable processing of Pug files defined in webpack entry
    new PugPlugin({
      js: {
        // output filename of extracted JS file from source script defined in Pug
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        // output filename of extracted CSS file from source style defined in Pug
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    })
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // PugPlugin already contain the pug-loader
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
    ],
  },
};