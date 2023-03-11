function arrDemo(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));
    let orderNum = 1;

    sortedArr.forEach(element => {
        console.log(`${orderNum}.${element}`);
        orderNum++;
    });
};

arrDemo(['John', 'Bob', 'Christina', 'Ema']);