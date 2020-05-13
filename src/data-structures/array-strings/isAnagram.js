/**
 * @function : isAnagram
 * @description : Function which tells if two strings are anagram
 * @param {string} strA
 * @param {string} strB
 * @return {boolean}
 */
function isAnagram(strA, strB) {
    if(strA.length !== strB.length) {
        return false;
    }

    // Utiliser TYPED ARRAY - Find the appropriate one
    var letters = new Array(256).fill(0);

    for( let i = 0; i < strA.length; i++) {
        let val = strA.charCodeAt(i);
        letters[val]++;
    }

    for( let i = 0; i < strB.length; i++) {
        let val = strB.charCodeAt(i);
        letters[val]--;
        if(letters[val] < 0) {
        return false;
        }  
    }

    return true;
}

module.exports = isAnagram;