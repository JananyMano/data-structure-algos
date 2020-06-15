/**
 * @function : rotateLeft
 * @description : it performs d left rotations on the array.
 * @param {Array} a
 * @param {Number} d
 * @return {Array}
 */
// Execution time 177665.9149999614 milliseconds
function rotateLeft(a, d) {
  var n = a.length;
  var result = a.map(function (value, index) {
    let pos = parseInt(index) + parseInt(d);
    if (pos > n - 1) {
      pos = pos - n;
    }
    return a[pos];
  });
  return result;
}

module.exports = rotateLeft;

//Solution using for-loop => Execution time not optimized
// Execution time 261670.65499996534 milliseconds

// function rotateLeft(a, d) {
//   var n = a.length;
//   let leftRotate = function (result) {
//     let temp = [];
//     for (var i = 0; i < n - 1; i++) {
//       temp[i] = result[i + 1];
//     }
//     temp[i] = result[0];
//     return temp;
//   };

//   let result = a.slice(0);
//   for (let i = 0; i < d; i++) {
//     result = leftRotate(result);
//   }
//   return result;
// }

//Solution using array.shift() => Execution time not optimized
// Execution time 373498.29999997746 milliseconds

// function rotateLeft(a, d) {
//   let temp = a.slice(0);
  
//   for (let i = 0; i < d; i++) {
//     let first = temp.shift();
//     temp.push(first);
//   }
//   return temp;
// }
