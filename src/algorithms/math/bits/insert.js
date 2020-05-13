/**
 * @function : insert
 * @description : insert M into N between the jth and ith bits
 * @param {integer} m
 * @param {integer} n
 * @param {integer} i - zero based
 * @param {integer} j - zero based
 * @return {number}
 */
function insert(n, m, i, j) {

    /**
     * Create a mask to clear bits i through j in n
     * EXAMPLE : i = 2, j = 4. Result should be 11100011.
     * For simplicity, we'll use just 8 bits for the example.
     */
    const allOnes = ~0;

    // 1s before position j, then 0s. left = 11100000
    const left = allOnes << (j+1);

    // 1s after position i. right = 00000011
    const right = ((1 << i) - 1);

    //All 1s, except for 0s between i and j. mask = 11100011
    const mask = left | right;

    /**
     * Clear bits j through i then put m in there
     */
    const n_cleared = n & mask; // Clear bits j through i.
    const m_shifted = m << i; // Move m into correct position

    return n_cleared | m_shifted;

}

module.exports = insert;