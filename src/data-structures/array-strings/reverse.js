/**
 * @function : reverse
 * @description : it reverses a string
 * @param {string} str
 * @return {string}
 */
export default function reverse(str) {

    let reversedStrInArr = [];
    reversedStrInArr.length = str.length;

    const size = str.length;

    for(let i = size; i > 0; i--) {
        reversedStrInArr[i - 1] = str.charAt(size - i);
    }

    return reversedStrInArr.toString();
}
  