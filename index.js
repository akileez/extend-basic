/*!
 * extend-basic <https://github.com/akileez/extend-basic>
 *
 * Copyright (c) 2014 Keith Williams, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function extend (a, b) {

  for(var key in b) {
    a[key] = b[key];
  }
  return a;

};