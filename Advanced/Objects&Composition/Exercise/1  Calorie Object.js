function objDemo(input) {
    let obj = {};

    for (let i = 0; i < input.length; i+=2) {
        let productName = input[i];
        let productCalories = Number(input[i+1]);
        obj[productName]=productCalories;
    }
    console.log(obj);
}

objDemo(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])