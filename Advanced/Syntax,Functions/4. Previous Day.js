// Write a JS function that calculates the date of the previous day by given year, month, and day.
// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`


function day(year,month,day){
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    date.setDate(date.getDate()-1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}

day(2016,9,30);