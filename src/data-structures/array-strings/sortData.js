/*const numbers = [
  { key: 6 },
  { key: 1 },
  { key: 3 },
  { key: 7 },
  { key: 9 },
  { key: 5 },
  { key: 4 },
];

const strs = [
  { id: 6 },
  { id: 1 },
  { id: 3 },
  { id: 7 },
  { id: 9 },
  { id: 5 },
  { id: 4 },
];*/

/**
 * @function : sortData
 * @description : it sorts an array of objects by key property
 * @param {Array} data
 * @param {string} prop
 * @param {boolean} isAsc
 * @return {Array}
 */
function sortData(data, prop, isAsc) {
  return data.sort((a, b) => {
    return (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1);
  });
}

module.exports = sortData;