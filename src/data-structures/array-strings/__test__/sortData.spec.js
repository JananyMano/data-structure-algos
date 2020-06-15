const sortData = require("../sortData");

describe("sortData", () => {
  it("it should sort the data by given order", () => {
    const dataNum = [
      { key: 6 },
      { key: 1 },
      { key: 3 },
      { key: 7 },
      { key: 9 },
      { key: 5 },
      { key: 4 },
    ];

    let output = [
      { key: 1 },
      { key: 3 },
      { key: 4 },
      { key: 5 },
      { key: 6 },
      { key: 7 },
      { key: 9 },
    ];

    expect(sortData(dataNum, "key", true)).toEqual(output);

    output = [
      { key: 9 },
      { key: 7 },
      { key: 6 },
      { key: 5 },
      { key: 4 },
      { key: 3 },
      { key: 1 },
    ];

    expect(sortData(dataNum, "key", false)).toEqual(output);

    const dataID = [
      { id: 6 },
      { id: 1 },
      { id: 3 },
      { id: 7 },
      { id: 9 },
      { id: 5 },
      { id: 4 },
    ];

    output = [
      { id: 1 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 9 },
    ];

    expect(sortData(dataID, "id", true)).toEqual(output);

    output = [
      { id: 9 },
      { id: 7 },
      { id: 6 },
      { id: 5 },
      { id: 4 },
      { id: 3 },
      { id: 1 },
    ];

    expect(sortData(dataID, "id", false)).toEqual(output);
  });
});
