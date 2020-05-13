/**
 * @function : isUniqueChars2
 * @description : It returns true if all characters are unique, false if not.
 * @param {string} str
 * @return {boolean}
 */
export default function isUniqueChars2(str) {

  if(str.length > 256) {
    return false;
  }

  let char_set = [];
  char_set.length = 256;
  for( let i = 0; i < str.length; i++) {
    let val = str.charCodeAt(i);
    if(char_set[val]) {
      return false;
    }
    char_set[val] = true;
  }

  return true;

}