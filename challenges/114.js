// ### Flattening
//
// Use the existing Array \`reduce\` method in combination with the \`concat\` method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
// You must name the function "flatten".

// e.g.
// let a = [[1,2],[3,4],[5,6,7]];
//
// flatten(a);
// result is:
// [1,2,3,4,5,6,7]
//
// Bonus: make it work even with a nested array like:
//
// let nested = [[1,2],[3, [4, 5]], [6], 7]
//
// flatten(nested);
// [1,2,3,4,5,6,7]

function flatten(array){
    // your code here
    let flattened = array.reduce(
        function(accumulator, currentValue) {
          return accumulator.flat(2).concat(currentValue)
        },
        []
      )
    console.log(flattened);
    return flattened;
}

let a = [[1,2],[3,4],[5,6,7]];
flatten(a);
//Expected result is: 
//[1,2,3,4,5,6,7]
//
// Bonus: make it work even with a nested array like:
//
let nested = [[1,2],[3, [4, 5]], [6], 7]

flatten(nested);
//
// // [1,2,3,4,5,6,7]
flatten([[1,9],[3,8]]);
// should return [1,9,3,8]
console.log(flatten([[1,9],[3,8]]).length);
    //   Expected $.length = 2 to equal 4.
    console.log(flatten([[1,9],[3,8]])[0]);
    //   Expected $[0] = [ 1, 9 ] to equal 1.
    console.log(flatten([[1,9],[3,8]])[1]);
    //   Expected $[1] = [ 3, 8 ] to equal 9.
    console.log(flatten([[1,9],[3,8]])[2]);
    //   Expected $[2] = undefined to equal 3.
    console.log(flatten([[1,9],[3,8]])[3]);
    //   Expected $[3] = undefined to equal 8.
    // Stack:
    //   Error: Expected $.length = 2 to equal 4.
    //   Expected $[0] = [ 1, 9 ] to equal 1. 
    //   Expected $[1] = [ 3, 8 ] to equal 9. 
    //   Expected $[2] = undefined to equal 3. 
    //   Expected $[3] = undefined to equal 8. 
module.exports = flatten;
