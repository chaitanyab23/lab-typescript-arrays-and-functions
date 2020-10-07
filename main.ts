import { ArrayService, StringManipulationService } from "./app-service";

export class ArrayComponent implements ArrayService {
  constructor() {}

  public arrayMultiply(myArray: number[]): Array<Number> {
    var number = [];
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 == 0 && myArray[i] % 10 == 0) {
        number.push(myArray[i]);
      }
    }
    return number;
  }

  public arraySeparate(myArray: any): Array<string> {
    var string = [];
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] === "string") {
        string.push(myArray[i]);
      }
    }
    return string;
  }

  public arraySplit(str: string): Array<number> {
    var temp = str.split(",");
    var primeArray = [];

    let k = 0;
    for (var i = 0; i < primeArray.length; i++) {
      if (primeArray[i] % 2 === 0) {
        console.log(primeArray[i] + " prime number");
      } else {
        console.log(primeArray[i] + " not a prime number");
      }
    }
    return primeArray;
  }

  public arraySort(myArray: any): Array<string> {
    myArray.sort();
    return myArray;
  }

  public arrayReplace(myArray: any): Array<number> {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 3 == 0) {
        myArray[i] = 5;
      }
    }
    return myArray;
  }
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
