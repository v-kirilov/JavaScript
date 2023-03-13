function townPop(input) {
    let towns = {};

    for (const info of input) {
        let inforArr = info.split(' <-> ')
        let town = inforArr[0];
        let population = Number(inforArr[1]);
        if (!towns[town]) {
            towns[town]=0;
        }

        towns[town] += population;   
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

townPop(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);