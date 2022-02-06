/* eslint @typescript-eslint/no-var-requires: "off" */
const component = require('./Component');
const index = require('./index.js');
const scss = require('./_Component.scss');
const scssIndex = require('./_index.scss');

module.exports = [component, index, scss, scssIndex];
