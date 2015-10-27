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
  t.same(extend(o.str1, o.str1), o.str1)
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

test.result()
