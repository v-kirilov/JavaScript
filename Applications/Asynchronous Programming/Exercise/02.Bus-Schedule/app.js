function solve() {
    const infoSpanElement = document.querySelector(".info");
    const departElement = document.getElementById('depart');
    const arriveElement = document.getElementById('arrive');



    let stop = {
        next: 'depot'
    };

    async function depart() {
        departElement.disabled = true;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const response = await fetch(url);
        if (response.status != 200) {
            infoSpanElement.textContent = `Error`;
            departElement.disabled = true;
            arriveElement.disabled = true;
            alert('Wrond data!')
        }

        stop = await response.json();
        infoSpanElement.textContent = `Next stop ${stop.name}`;
        arriveElement.disabled = false;
    }

    function arrive() {
        infoSpanElement.textContent = `Arriving at ${stop.name}`;
        departElement.disabled = false;
        arriveElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();