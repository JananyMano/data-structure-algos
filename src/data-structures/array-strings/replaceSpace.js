/**
 * @function : replaceSpace
 * @description : Function which replaces all spaces by %20
 * @param {string} str
 * @return {string}
 */
function replaceSpace(str) {
    return str.split(' ').join('%20');
}

module.exports = replaceSpace;