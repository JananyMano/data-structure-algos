/**
 * @function : reverse
 * @description : it reverses a string
 * @param {string} str
 * @return {string}
 */
function reverse(str) {
    return str.split("").reverse().join("");
}

module.exports = reverse;