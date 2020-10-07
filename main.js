"use strict";
exports.__esModule = true;
exports.ArrayComponent = void 0;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.arrayMultiply = function (myArray) {
        var number = [];
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 == 0 && myArray[i] % 10 == 0) {
                number.push(myArray[i]);
            }
        }
        return number;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        var string = [];
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] === "string") {
                string.push(myArray[i]);
            }
        }
        return string;
    };
    ArrayComponent.prototype.arraySplit = function (str) {
        var temp = str.split(",");
        var primeArray = [];
        var k = 0;
        for (var i = 0; i < primeArray.length; i++) {
            if (primeArray[i] % 2 === 0) {
                console.log(primeArray[i] + " prime number");
            }
            else {
                console.log(primeArray[i] + " not a prime number");
            }
        }
        return primeArray;
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
        myArray.sort();
        return myArray;
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 == 0) {
                myArray[i] = 5;
            }
        }
        return myArray;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [34, 45, 60, 23, 13, 25, 70];
var array = new ArrayComponent();
console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
