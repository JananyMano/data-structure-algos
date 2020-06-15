/**
 * @function : wordCount
 * @description : it gives the number of words in a sentence
 * @param {string} str
 * @return {Number}
 */
function wordCount(str) {
  let count = 1;
  for (var i=1; i < str.length; i++) {
    if(str[i] === " " && i !== str.length-1) {
      count ++;
    }
  }
  return count;
}

module.exports = wordCount;