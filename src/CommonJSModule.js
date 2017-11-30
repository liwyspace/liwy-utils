/**
 * CommonJS规范 模块写法
 */


/* 方法一
function MathUtil() {
};
MathUtil.prototype.add = function(a, b) {
    return a + b;
};

MathUtil.prototype.sub = function(a, b) {
  return a - b;
};

module.exports = MathUtil;

//var LiwyUtil = require('../../../src/CommonJSModule.js');
//var liwyUtil = new LiwyUtil();
//expect(liwyUtil.add(3,4)).toBe(7);
//*/


/* 方法二
var add = function(a, b) {
    return a + b;
};

var sub = function(a, b) {
  return a - b;
};

var liwyUtil = {
    add: add,
    sub: sub
};

module.exports = liwyUtil;

//var liwyUtil = require('../../../src/CommonJSModule.js');
//expect(liwyUtil.add(3,4)).toBe(7);
//*/


//* 方法三
module.exports.sub = function(a, b) {
    const dd = 0;
    return a - b + dd;
};

import MathUtil from './ES6Module.js';
module.exports.add = function(a, b) {
    return MathUtil.add(a,b);
};

//var liwyUtil = require('../../../src/CommonJSModule.js');
//expect(liwyUtil.add(3,4)).toBe(7);
//*/

