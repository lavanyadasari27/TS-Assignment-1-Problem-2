var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//objects
var obj1 = { a: 1, b: "Hello" };
var obj2 = { b: "Welcome", c: false };
var obj3 = { c: true, d: [1, 2, 3] };
//function to merge objects
function merge(obj1, obj2, obj3) {
    var objects = __assign(__assign(__assign({}, obj1), obj2), obj3);
    return objects;
}
var mergedObjects = merge(obj1, obj2, obj3);
console.log(mergedObjects);
