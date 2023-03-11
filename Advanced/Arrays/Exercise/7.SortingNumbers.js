function arrDemo(arr) {
    let sortedArr = arr.sort((a, b) => a - b);

    let outputArr = [];
    while (arr.length !== 0) {
        outputArr.push(sortedArr.shift());
        outputArr.push(sortedArr.pop());
    }
    return outputArr;
};

arrDemo([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);