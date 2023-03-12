function arrDemo(arr) {
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    sortedArr.forEach(element => {
        console.log(element);
    });
};

arrDemo(['alpha','beta']);