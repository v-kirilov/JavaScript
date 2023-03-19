function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let time = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    let daysBtn = document.getElementById('daysBtn').addEventListener('click', calculate);
    let hoursBtn = document.getElementById('hoursBtn').addEventListener('click', calculate);
    let minutesBtn = document.getElementById('minutesBtn').addEventListener('click', calculate);
    let secondsBtn = document.getElementById('secondsBtn').addEventListener('click', calculate);

    function convert(value, unit) {
        let days = value/time[unit];
        return {
            days:days,
            hours:days*time.hours,
            minutes:days*time.minutes,
            seconds:days*time.seconds
        }
    };

    function calculate(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');

        let inputTime = convert(Number(input.value), input.id);
        days.value = inputTime.days;
        hours.value = inputTime.hours;
        minutes.value = inputTime.minutes;
        seconds.value = inputTime.seconds;
    };
}