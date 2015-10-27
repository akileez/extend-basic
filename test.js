var test = require('ttr')

var extend = require('./')

function defs () {
  return {
    num1: {foo: 1},
    num2: {foo: 2},
    str1: {foo: 'bar'},
    str2: {foo: 'baz'},
    arr1: {foo: [1, 'b', 3]},
    arr2: {foo: [5, 'f', 7]},
    obj1: {foo: {bar: 'baz'}},
    obj2: {foo: {bar: 'bam'}},
    dat1: {foo: new Date(2015, 10, 27)},
    dat2: {foo: new Date(2015, 10, 31)},
    fnc1: {foo: function () {return true}},
    fnc2: {foo: function () {return false}},
    boo1: {foo: true},
    boo2: {foo: false},
    zer1: {foo: 0},
    zer2: {foo: 0},
    nul1: {foo: null},
    nul2: {foo: null},
    udf1: {foo: undefined},
    udf2: {foo: undefined}
  }
}

// Extending Number
test('extend number with number', function (t) {
  var o = defs()
  t.same(extend(o.num1, o.num2), o.num2)
})

test('extend number with string', function (t) {
  var o = defs()
  t.same(extend(o.num1, o.str1), o.str1)
})

test('extend number with array', function (t) {
  var o = defs()
  t.same(extend(o.num1, o.arr1), o.arr1)
})

test('extend number with object', function (t) {
  var o = defs()
  t.same(extend(o.num1, o.obj1), o.obj1)
})

test('extend number with date', function (t) {
  var o = defs()
  t.same(extend(o.num1, o.dat1), o.dat1)
})

test('extend number with function', function (t) {
  var o = defs()
  t.same(extend(o.num1, o.fnc1), o.fnc1)
})

test('extend number with boolean', function (t) {
  var o = defs()
  t.same(extend(o.num1, o.boo1), o.boo1)
})

test('extend number with 0', function (t) {
  var o = defs()
  t.same(extend(o.num1, o.zer1), o.zer1)
})

test('extend number with null', function (t) {
  var o = defs()
  t.same(extend(o.num1, o.nul1), o.nul1)
})

test('extend number with undefined', function (t) {
  var o = defs()
  t.same(extend(o.num1, o.udf1), o.udf1)
})

// Extending String
test('extend string with number', function (t) {
  var o = defs()
  t.same(extend(o.str1, o.num1), o.num1)
})

test('extend string with string', function (t) {
  var o = defs()
  t.same(extend(o.str1, o.str2), o.str2)
})

test('extend string with array', function (t) {
  var o = defs()
  t.same(extend(o.str1, o.arr1), o.arr1)
})

test('extend string with object', function (t) {
  var o = defs()
  t.same(extend(o.str1, o.obj1), o.obj1)
})

test('extend string with date', function (t) {
  var o = defs()
  t.same(extend(o.str1, o.dat1), o.dat1)
})

test('extend string with function', function (t) {
  var o = defs()
  t.same(extend(o.str1, o.fnc1), o.fnc1)
})

test('extend string with boolean', function (t) {
  var o = defs()
  t.same(extend(o.str1, o.boo1), o.boo1)
})

test('extend string with 0', function (t) {
  var o = defs()
  t.same(extend(o.str1, o.zer1), o.zer1)
})

test('extend string with null', function (t) {
  var o = defs()
  t.same(extend(o.str1, o.nul1), o.nul1)
})

test('extend string with undefined', function (t) {
  var o = defs()
  t.same(extend(o.str1, o.udf1), o.udf1)
})

// Extending Array
test('extend array with number', function (t) {
  var o = defs()
  t.same(extend(o.arr1, o.num1), o.num1)
})

test('extend array with string', function (t) {
  var o = defs()
  t.same(extend(o.arr1, o.str1), o.str1)
})

test('extend array with array', function (t) {
  var o = defs()
  t.same(extend(o.arr1, o.arr2), o.arr2)
})

test('extend array with object', function (t) {
  var o = defs()
  t.same(extend(o.arr1, o.obj1), o.obj1)
})

test('extend array with date', function (t) {
  var o = defs()
  t.same(extend(o.arr1, o.dat1), o.dat1)
})

test('extend array with function', function (t) {
  var o = defs()
  t.same(extend(o.arr1, o.fnc1), o.fnc1)
})

test('extend array with boolean', function (t) {
  var o = defs()
  t.same(extend(o.arr1, o.boo1), o.boo1)
})

test('extend array with 0', function (t) {
  var o = defs()
  t.same(extend(o.arr1, o.zer1), o.zer1)
})

test('extend array with null', function (t) {
  var o = defs()
  t.same(extend(o.arr1, o.nul1), o.nul1)
})

test('extend array with undefined', function (t) {
  var o = defs()
  t.same(extend(o.arr1, o.udf1), o.udf1)
})

// Extending Object
test('extend object with number', function (t) {
  var o = defs()
  t.same(extend(o.obj1, o.num1), o.num1)
})

test('extend object with string', function (t) {
  var o = defs()
  t.same(extend(o.obj1, o.str1), o.str1)
})

test('extend object with array', function (t) {
  var o = defs()
  t.same(extend(o.obj1, o.arr1), o.arr1)
})

test('extend object with object', function (t) {
  var o = defs()
  t.same(extend(o.obj1, o.obj2), o.obj2)
})

test('extend object with date', function (t) {
  var o = defs()
  t.same(extend(o.obj1, o.dat1), o.dat1)
})

test('extend object with function', function (t) {
  var o = defs()
  t.same(extend(o.obj1, o.fnc1), o.fnc1)
})

test('extend object with boolean', function (t) {
  var o = defs()
  t.same(extend(o.obj1, o.boo1), o.boo1)
})

test('extend object with 0', function (t) {
  var o = defs()
  t.same(extend(o.obj1, o.zer1), o.zer1)
})

test('extend object with null', function (t) {
  var o = defs()
  t.same(extend(o.obj1, o.nul1), o.nul1)
})

test('extend object with undefined', function (t) {
  var o = defs()
  t.same(extend(o.obj1, o.udf1), o.udf1)
})

// Extending Function
test('extend function with number', function (t) {
  var o = defs()
  t.same(extend(o.fnc1, o.num1), o.num1)
})

test('extend function with string', function (t) {
  var o = defs()
  t.same(extend(o.fnc1, o.str1), o.str1)
})

test('extend function with array', function (t) {
  var o = defs()
  t.same(extend(o.fnc1, o.arr1), o.arr1)
})

test('extend function with object', function (t) {
  var o = defs()
  t.same(extend(o.fnc1, o.obj1), o.obj1)
})

test('extend function with date', function (t) {
  var o = defs()
  t.same(extend(o.fnc1, o.dat1), o.dat1)
})

test('extend function with function', function (t) {
  var o = defs()
  t.same(extend(o.fnc1, o.fnc2), o.fnc2)
})

test('extend function with boolean', function (t) {
  var o = defs()
  t.same(extend(o.fnc1, o.boo1), o.boo1)
})

test('extend function with 0', function (t) {
  var o = defs()
  t.same(extend(o.fnc1, o.zer1), o.zer1)
})

test('extend function with null', function (t) {
  var o = defs()
  t.same(extend(o.fnc1, o.nul1), o.nul1)
})

test('extend function with undefined', function (t) {
  var o = defs()
  t.same(extend(o.fnc1, o.udf1), o.udf1)
})

// Extending Date
test('extend date with number', function (t) {
  var o = defs()
  t.same(extend(o.dat1, o.num1), o.num1)
})

test('extend date with string', function (t) {
  var o = defs()
  t.same(extend(o.dat1, o.str1), o.str1)
})

test('extend date with array', function (t) {
  var o = defs()
  t.same(extend(o.dat1, o.arr1), o.arr1)
})

test('extend date with object', function (t) {
  var o = defs()
  t.same(extend(o.dat1, o.obj1), o.obj1)
})

test('extend date with date', function (t) {
  var o = defs()
  t.same(extend(o.dat1, o.dat2), o.dat2)
})

test('extend date with function', function (t) {
  var o = defs()
  t.same(extend(o.dat1, o.fnc1), o.fnc1)
})

test('extend date with boolean', function (t) {
  var o = defs()
  t.same(extend(o.dat1, o.boo1), o.boo1)
})

test('extend date with 0', function (t) {
  var o = defs()
  t.same(extend(o.dat1, o.zer1), o.zer1)
})

test('extend date with null', function (t) {
  var o = defs()
  t.same(extend(o.dat1, o.nul1), o.nul1)
})

test('extend date with undefined', function (t) {
  var o = defs()
  t.same(extend(o.dat1, o.udf1), o.udf1)
})

// Extending Boolean
test('extend boolean with number', function (t) {
  var o = defs()
  t.same(extend(o.boo1, o.num1), o.num1)
})

test('extend boolean with string', function (t) {
  var o = defs()
  t.same(extend(o.boo1, o.str1), o.str1)
})

test('extend boolean with array', function (t) {
  var o = defs()
  t.same(extend(o.boo1, o.arr1), o.arr1)
})

test('extend boolean with object', function (t) {
  var o = defs()
  t.same(extend(o.boo1, o.obj1), o.obj1)
})

test('extend boolean with date', function (t) {
  var o = defs()
  t.same(extend(o.boo1, o.dat1), o.dat1)
})

test('extend boolean with function', function (t) {
  var o = defs()
  t.same(extend(o.boo1, o.fnc1), o.fnc1)
})

test('extend boolean with boolean', function (t) {
  var o = defs()
  t.same(extend(o.boo1, o.boo2), o.boo2)
})

test('extend boolean with 0', function (t) {
  var o = defs()
  t.same(extend(o.boo1, o.zer1), o.zer1)
})

test('extend boolean with null', function (t) {
  var o = defs()
  t.same(extend(o.boo1, o.nul1), o.nul1)
})

test('extend boolean with undefined', function (t) {
  var o = defs()
  t.same(extend(o.boo1, o.udf1), o.udf1)
})

// Extending 0
test('extend 0 with number', function (t) {
  var o = defs()
  t.same(extend(o.zer1, o.num1), o.num1)
})

test('extend 0 with string', function (t) {
  var o = defs()
  t.same(extend(o.zer1, o.str1), o.str1)
})

test('extend 0 with array', function (t) {
  var o = defs()
  t.same(extend(o.zer1, o.arr1), o.arr1)
})

test('extend 0 with object', function (t) {
  var o = defs()
  t.same(extend(o.zer1, o.obj1), o.obj1)
})

test('extend 0 with date', function (t) {
  var o = defs()
  t.same(extend(o.zer1, o.dat1), o.dat1)
})

test('extend 0 with function', function (t) {
  var o = defs()
  t.same(extend(o.zer1, o.fnc1), o.fnc1)
})

test('extend 0 with boolean', function (t) {
  var o = defs()
  t.same(extend(o.zer1, o.boo1), o.boo1)
})

test('extend 0 with 0', function (t) {
  var o = defs()
  t.same(extend(o.zer1, o.zer2), o.zer2)
})

test('extend 0 with null', function (t) {
  var o = defs()
  t.same(extend(o.zer1, o.nul1), o.nul1)
})

test('extend 0 with undefined', function (t) {
  var o = defs()
  t.same(extend(o.zer1, o.udf1), o.udf1)
})

// Extending Null
test('extend null with number', function (t) {
  var o = defs()
  t.same(extend(o.nul1, o.num1), o.num1)
})

test('extend null with string', function (t) {
  var o = defs()
  t.same(extend(o.nul1, o.str1), o.str1)
})

test('extend null with array', function (t) {
  var o = defs()
  t.same(extend(o.nul1, o.arr1), o.arr1)
})

test('extend null with object', function (t) {
  var o = defs()
  t.same(extend(o.nul1, o.obj1), o.obj1)
})

test('extend null with date', function (t) {
  var o = defs()
  t.same(extend(o.nul1, o.dat1), o.dat1)
})

test('extend null with function', function (t) {
  var o = defs()
  t.same(extend(o.nul1, o.fnc1), o.fnc1)
})

test('extend null with boolean', function (t) {
  var o = defs()
  t.same(extend(o.nul1, o.boo1), o.boo1)
})

test('extend null with 0', function (t) {
  var o = defs()
  t.same(extend(o.nul1, o.zer1), o.zer1)
})

test('extend null with null', function (t) {
  var o = defs()
  t.same(extend(o.nul1, o.nul2), o.nul2)
})

test('extend null with undefined', function (t) {
  var o = defs()
  t.same(extend(o.nul1, o.udf1), o.udf1)
})

// Extending Undefined
test('extend undefined with number', function (t) {
  var o = defs()
  t.same(extend(o.udf1, o.num1), o.num1)
})

test('extend undefined with string', function (t) {
  var o = defs()
  t.same(extend(o.udf1, o.str1), o.str1)
})

test('extend undefined with array', function (t) {
  var o = defs()
  t.same(extend(o.udf1, o.arr1), o.arr1)
})

test('extend undefined with object', function (t) {
  var o = defs()
  t.same(extend(o.udf1, o.obj1), o.obj1)
})

test('extend undefined with date', function (t) {
  var o = defs()
  t.same(extend(o.udf1, o.dat1), o.dat1)
})

test('extend undefined with function', function (t) {
  var o = defs()
  t.same(extend(o.udf1, o.fnc1), o.fnc1)
})

test('extend undefined with boolean', function (t) {
  var o = defs()
  t.same(extend(o.udf1, o.boo1), o.boo1)
})

test('extend undefined with 0', function (t) {
  var o = defs()
  t.same(extend(o.udf1, o.zer1), o.zer1)
})

test('extend undefined with null', function (t) {
  var o = defs()
  t.same(extend(o.udf1, o.nul1), o.nul1)
})

test('extend undefined with undefined', function (t) {
  var o = defs()
  t.same(extend(o.udf1, o.udf2), o.udf2)
})

test('shallow object clone', function (t) {
  var o = {
    foo: 'bar',
    baz: 1,
    bam: true,
    who: ['a', 'b', false]
  }
  t.same(extend({}, o), {
    foo: 'bar',
    baz: 1,
    bam: true,
    who: ['a', 'b', false]
  })
})

test('complex array extend', function (t) {
  var a = {
    foo: ['a', 'b', 'c'],
    bar: 'bla',
    baz: function () {}
  }
  var b = {
    foo: 'new',
    bar: [1, 2, 3],
    baz: ['alpha', 'beta']
  }
  t.same(extend(a, b), {
    foo: 'new',
    bar: [1, 2, 3],
    baz: ['alpha', 'beta']
  })
})

test('complex function extend', function (t) {
  // We use two dummy functions to reference in our objects. Otherwise our objects will
  // never be equal since the functions (although looking the same) will never point to
  // the same memory.
  var dummyA = function () {
    return false
  }
  var dummyB = function () {
    return true
  }
  var a = {
    baz: dummyA()
  }
  var b = {
    baz: dummyB()
  }

  t.same(extend(a, b), {
    baz: dummyB()
  })
})

test('does not deep extend', function (t) {
  var dummyFunction = function () {
    return true
  }

  var a = {
    app: 'My App',
    connections: {
      default: 'mysql',
      mysql: {
        driver: 'mysql',
        host: 'localhost',
        database: 'myapp.dev'
      }
    },
    init: {
      setup: null
    }
  }

  var b = {
    environment: 'production',
    connections: {
      default: 'mongodb',
      mysql: {
        database: 'myapp.prod'
      },
      mongodb: {
        host: 'http://mongo.example.org',
        database: 'myapp'
      }
    },
    init: {
      setup: dummyFunction()
    }
  }

  var expected = {
    app: 'My App',
    environment: 'production',
    connections: {
      default: 'mongodb',
      mysql: {
        driver: 'mysql',
        host: 'localhost',
        database: 'myapp.prod'
      },
      mongodb: {
        host: 'http://mongo.example.org',
        database: 'myapp'
      }
    },
    init: {
      setup: dummyFunction()
    }
  }

  t.notSame(extend(a, b), expected)
})

test('grand finale', function (t) {
  var dummyFunction = function () {
    return true
  }

  var a = {
    myVersion: 1,
    myDate: new Date(2013, 4, 10),
    myArray: ['foo', 'bar'],
    deep: {
      myArray: ['a', 2, 'b', { sub: 'test' }],
      object: {
        foo: 'test',
        bar: {
          subsub: 'go',
          subsubArr: ['a', 'b', 'c']
        }
      }
    },
    myFunction: function () {
      return true
    }
  }

  var b = {
    myFoo: 'b',
    myVersion: '1',
    deep: {
      object: {
        bar: {
          subsubArr: ['d']
        }
      },
      strg: 'String here...',
      subsub: {
        val: 'go'
      }
    },
    myFunction: dummyFunction
  }

  var expected = {
    myFoo: 'b',
    myVersion: '1',
    myDate: new Date(2013, 4, 10),
    myArray: ['foo', 'bar'],
    deep: {
      myArray: ['a', 2, 'b', { sub: 'test' }],
      object: {
        foo: 'test',
        bar: {
          subsub: 'go',
          subsubArr: ['d']
        }
      },
      strg: 'String here...',
      subsub: {
        val: 'go'
      }
    },
    myFunction: dummyFunction

  }
  // Of course this fails! extend on does a shallow copy
  t.notSame(extend(a, b), expected)
})

test.result()
