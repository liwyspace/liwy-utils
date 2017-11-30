
//*
var liwyUtil = require('../../../src/CommonJSModule.js');
import MathUtil from '../../../src/ES6Module.js';

describe("LIWY 测试程序", function() {
    it("test add", () => {
        expect(3+5).toBe(8);
    });

    it("test sub", () => {
        expect(8-2).toBe(6);
    });


    it("test CommonJSModule", () => {
        const res = 7;
        expect(liwyUtil.add(3,4)).toBeAddOne(res+1);
        expect(liwyUtil.sub(5,4)).toBe(1);
    });

    it("test ES6Module", function() {
        expect(MathUtil.add(3,4)).toBeAddOne(8);
        expect(MathUtil.sub(6,4)).toBe(2);
    });
});
//*/

/*
// import Polygon from '../../../src/ES6Module.js';

describe('ES6 Polygon', function() {
  let polygon = new Polygon(5, 4);

  it('should return 20 when calling calcArea', function() {
    expect(polygon.calcArea()).toBe(20);
  });
});
//*/
