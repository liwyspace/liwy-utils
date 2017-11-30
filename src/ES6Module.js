/**
 * ES6 模块写法
 */

/**
 * Converts `value` to a string.
 *
 * @since 1.0.0
 * @param {*} value the value to convert.
 * @return {String} Returns the converted string.
 * @example
 *
 */


/* 方法一
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

export {add, sub};

export function mul(a,b) {
    return a*b;
}

//import {add, sub, mul} from '../../../src/ES6Module.js';
//add(a,b);
//import * as MathUtil from '../../../src/ES6Module.js';
//MathUtil.add(a,b);
//MathUtil.mul(a,b);
//*/


/* 方法二
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

export default add;

//import add from '../../../src/ES6Module.js';
//add(a,b);
//*/


//* 方法三
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

export default {add:add,sub:sub};

//import MathUtil from '../../../src/ES6Module.js';
//MathUtil.add(a,b);
//*/


/* 方法四 - es6类
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}
// export default Polygon;

// import Polygon from '../src/polygon';
// let polygon = new Polygon(5, 4);
// assert.equal(20, polygon.calcArea());
//*/
