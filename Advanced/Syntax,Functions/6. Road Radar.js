// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h
// If the driver is within the limits, there should be a printed speed and the speed limit. 
//                 `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.


function driving(speed, location) {
    let maxSpeed = 0;
    if (location === 'city') {
        maxSpeed = 50;
    } else if (location === 'residential') {
        maxSpeed = 20;
    } else if (location === 'interstate') {
        maxSpeed = 90;
    } else if (location === 'motorway') {
        maxSpeed = 130;
    }

    if (speed < maxSpeed) {
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
    }
    if (speed - maxSpeed <= 20 && speed - maxSpeed > 0) {
        console.log(`The speed is ${speed - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - speeding`);
    }
    if (speed - maxSpeed <= 40 && speed - maxSpeed > 20) {
        console.log(`The speed is ${speed - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - excessive speeding`);
    }
    if (speed - maxSpeed > 40) {
        console.log(`The speed is ${speed - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - reckless driving`);
    }
}

driving(40, 'city');
driving(21, 'residential');
driving(120, 'interstate');
driving(200, 'motorway');