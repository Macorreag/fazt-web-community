/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

const { override, addWebpackAlias } = require('customize-cra');
const { resolve } = require('path');

module.exports = override(
  addWebpackAlias({
    ['@assets']: resolve(__dirname, './src/assets')
  })
);
