function objDemo(object) {
    let catalogue = {};
    for (const sample of object) {
        let input = sample.split(' | ');
        let town = input[0];
        let product = input[1];
        let price = Number(input[2]);

        if (!catalogue.hasOwnProperty(product)) {
            catalogue[product] = [];
            catalogue[product].push(town);
            catalogue[product].push(price);
        } else {
            if (catalogue[product][1]>price) {
              catalogue[product][0]=town;
              catalogue[product][1]=price;
            }
        }
    }
    for (const key in catalogue) {
       console.log(`${key} -> ${catalogue[key][1]} (${catalogue[key][0]})`);
    }
}

objDemo(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);