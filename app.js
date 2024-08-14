// // The Farm Problem

// // In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// // chickens = 2 legs
// // cows = 4 legs
// // pigs = 4 legs
// // The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// function animals(chickens, cows, pigs) {
//     // Each species has a fixed number of legs
//     const legsPerChicken = 2;
//     const legsPerCow = 4;
//     const legsPerPig = 4;
    
//     // Calculate the total number of legs
//     const totalLegs = (chickens * legsPerChicken) + (cows * legsPerCow) + (pigs * legsPerPig);
    
//     return totalLegs;
// }

// // Example usage:
// console.log(animals(2, 3, 5));  // ➞ 36
// console.log(animals(1, 2, 3));  // ➞ 22
// console.log(animals(5, 2, 8));  // ➞ 50

// // Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order

// const findMinMax = (arr) => {
//     let min = arr[0];
//     let max = arr[0];

//     arr.forEach((num) => {
//         // is this number high/low?
//         if (num <= min) {
//             min = num;
//         } else if (num >= max) {
//             max = num;
//         }
//         console.log(min, max);
//     });

//     console.log(["Min:", min, "Max:", max]);
//     return [min, max];
// };
// findMinMax([-1, 2, 3, 4, 5]);  // ➞ [-1, 5]
// findMinMax([5,6,9,7,8]);  // ➞ [5, 9]
// findMinMax([-5,-6,-9,-7,-8]);  // ➞ [-9, -5]

// Solution #2
function findMinMax(arr) {
    if (arr.length === 0) {
      return [undefined, undefined];
    }
    
    let min = arr[0];
    let max = arr[0];
    
    arr.forEach((num) => {
      if (num < min) {
        min = num;
      }
      if (num > max) {
        max = num;
      }
    });
    
    console.log(["Min:", min, "Max:", max]);
    return [min, max];
}

    findMinMax([1, 2, 3, 4, 5]); // Output: [1, 5]

    findMinMax([2334454, 5]); // Output: [5, 2334454]

    findMinMax([1]); // Output: [1, 1]

    findMinMax([]); // Output: [undefined, undefined]



// // Sum of Cubes
// // Create a function that takes in an array of numbers and returns the sum of its cubes.

// function sumOfCubes(arr) {
//     // Use the reduce method to calculate the sum of cubes
//     return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
// }

// console.log(sumOfCubes([1, 2, 3])); // ➞ 36 (1^3 + 2^3 + 3^3 = 1 + 8 + 27)
// console.log(sumOfCubes([-1, 2, 3])); // ➞ 36 (-1^3 + 2^3 + 3^3 = -1 + 8 + 27)
// console.log(sumOfCubes([])); // ➞ 0 (sum of cubes of an empty array)


