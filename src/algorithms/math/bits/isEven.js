/**
 * @param {number} number
 * @return {boolean}
 */
function isEven(number) {
    return (number & 1) === 0; // number % 2 === 0
}

module.exports = isEven;

