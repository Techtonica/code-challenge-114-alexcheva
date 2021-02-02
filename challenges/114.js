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

module.exports = flatten;
