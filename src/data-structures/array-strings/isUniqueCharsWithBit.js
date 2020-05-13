/**
 * @function : isUniqueCharsWithBit
 * @description : it returns true if all characters are unique, false if not.
 * @param {string} str
 * @return {boolean}
 */
export default function isUniqueCharsWithBit(str) {
    let checker = 0;
    for(let i = 0; i < str.length; i++) {
        let val = str.charAt(i) - 'a';
        if((checker & (1 << val)) > 0) {
            return false;
        }
        checker |= (1 << val);
    }
    return true;
}