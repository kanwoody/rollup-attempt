define("a/test", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.a = void 0;
    var a = function () {
        var arr = [1, 2, 3];
        var map = new Map();
        arr.forEach(function (v) {
            map.set(v, v);
        });
        return map;
    };
    exports.a = a;
});
define("b/test", ["require", "exports", "a/test"], function (require, exports, test_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var b = function () {
        var c = (0, test_1.a)();
        for (var _i = 0, c_1 = c; _i < c_1.length; _i++) {
            var _a = c_1[_i], d = _a[0], e = _a[1];
            console.log("".concat(d, " => ").concat(e));
        }
    };
    b();
});
