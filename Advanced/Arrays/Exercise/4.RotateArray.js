// Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
// The input comes as two parameters – an array of strings and a number. The second parameter is the amount of rotation you need to perform.
// The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.

function arrDemo(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let rotate = arr.pop();
        arr.unshift(rotate);
    }
    console.log(arr.join(' '));
};

arrDemo(['1', '2', '3', '4'], 2);