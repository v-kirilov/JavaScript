function objDemo(object) {
    let result = object.sort((a,b)=>a.localeCompare(b));
    let firstChar = '';
    let pair =[];

    for (let i = 0; i < result.length; i++) {
        pair = result[i].split(' : ');
        if (pair[0][0]!=firstChar) {
            console.log(pair[0][0]);
            firstChar = pair[0][0];
        }
        console.log(` ${pair[0]}: ${pair[1]}`);
    }
}
objDemo(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
     'T-Shirt : 10']
);
