function solve(city,population,treasury){
    let record = {
        name: city,
        population: population,
        treasury: treasury,
    };
    //Second way // dynamic way
    let record2 = {};
    record2.name = city;
    record2.population = population;
    record2.treasury = treasury;


    return record;
};

solve('Tortuga',
7000,
15000
)