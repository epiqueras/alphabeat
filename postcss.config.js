/* eslint-disable import/no-extraneous-dependencies */
const postcssFocus = require('postcss-focus');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');
const postcssReporter = require('postcss-reporter');

module.exports = {
  plugins: [
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    cssnano({
      autoprefixer: false,
    }),
    postcssReporter({
      clearMessages: true,
    }),
  ],
};
