function arrDemo() {
    let arr = [1, 2, 3, 4];
    arr[10] = 55;
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }
};

arrDemo();

//Splice

// function arrD2(){
//     let arr = [11,22,33,44,55];
//     arr.splice(1,0,123)

//     console.log(arr);
// };
// arrD2();

//SORT Numbers
// function arrD2() {
//     let arr = [11, 22, 33, 44, 55];
//     let sortedArr = arr.sort(function (a, b) {
//         return a - b;
//     });
//     console.log(sortedArr);

//     for (let i = 0; i < sortedArr.length; i++) {
//         if (i>2) {
//             break;
//         }
//         console.log(`Your place is:${i+1}`);
//         console.log(`Your points are:${sortedArr[i]}`);
//     }
// };

// arrD2();

//Sort Strings
function arrD2() {
    let arr = ['cc', 'a', 'bbb'];
    let sortedArr = arr.sort(function (a, b) {
        return b.localeCompare(a);
    });
    console.log(sortedArr);
};

arrD2();

//Reverse string

function arrD3(input) {
    
    console.log(input.split('').reverse().join(''));
};

arrD3('qwerty');
