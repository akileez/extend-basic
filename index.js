/*!
 * extend-basic <https://github.com/akileez/extend-basic>
 *
 * Copyright (c) 2014-2015 Keith Williams, contributors.
 * Licensed under the MIT license.
 */

'use strict'

module.exports = function extend (a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key]
    }
  }
  return a

}
