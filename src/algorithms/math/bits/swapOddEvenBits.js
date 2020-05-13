/**
 * @function : swapOddEvenBits
 * @description : Function which swaps odd and even bits in any given number
 * @param {number} number
 * @return {number} 
 */
function swapOddEvenBits(number) {
    return ( (number & 101010101010) >> 1) | ( (number & 10101010101) << 1);
}

module.exports = swapOddEvenBits;