//MAP

function arrDemo() {
    let arr = [1, 2, 3, 4, 5]

    let newArr = arr.map(function (element) {
        return element + 5;
    });

    console.log(newArr);
};
arrDemo();