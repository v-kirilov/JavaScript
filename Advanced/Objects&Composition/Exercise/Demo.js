function objDemo() {
    let doubleChoko = {
        flourType: 'brown',
        bonus: 'fruit',
        weight: 100,
    };

    console.log(typeof doubleChoko);
    console.log(doubleChoko);
    console.log(doubleChoko.weight);

    //Ако искаме да изтрием пропърти на обекта , можем.
    delete doubleChoko.bonus;
    console.log(doubleChoko);

    //За да копираме обект DeepCopy 

    let copy = JSON.parse(JSON.stringify(doubleChoko));

    for (const key in copy) {
       console.log(`${key} - ${doubleChoko[key]}`);
    }

    let keys = Object.keys(copy);
    let values = Object.values(copy);
    let entries = Object.entries(copy);

    console.log(entries);
}

objDemo()