/**
 * 
 * Create a list, seqList, of N empty sequences, where each sequence is indexed from 0 to N-1. 
 * The elements within each of the N sequences also use 0-indexing.
 * Create an integer, lastAnswer , and initialize it to .
 * The 2 types of queries that can be performed on your list of sequences (seqList) are described below:
 * Query: 1 x y
 * Find the sequence, seq, at index ((x^lastAnswer) % N) in seqList.
 * Append integer y to sequence seq.
 * Query: 2 x y
 * Find the sequence, seq, at index ((x^lastAnswer) % N) in seqList.
 * Find the value of element y%size in  seq (where size is the size of seq) and assign it to lastAnswer.
 * Print the new value of  lastAnswer on a new line
 * 
 * @param {Integer} n
 * @param {Array} queries
 * @return {Array} 
 * 
 * INPUT
 * 2 5
 * 1 0 5
 * 1 1 7
 * 1 0 3
 * 2 1 0
 * 2 1 1
 * 
 * OUTPUT
 * 7
 * 3
 */
function dynamicArray(n, queries) {
    const lastAnswer = [0];
    const seqList = [...new Array(n)].map(() => []);

    queries.forEach(q => {
        const seq = seqList[((q[1] ^ lastAnswer.slice(-1)) % n)];
        q[0] == 1 ? seq.push(q[2]) : lastAnswer.push(seq[q[2] % seq.length]);
    });

    return lastAnswer.slice(1);
}

module.exports = dynamicArray;