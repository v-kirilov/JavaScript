async function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let inputElement = document.getElementById('stopId');
    let stopNameElement = document.getElementById('stopName');
    let busesElement = document.getElementById('buses');
    //1287, 1308, 1327 and 2334

    let stopId = inputElement.value;
    console.log(stopId);

    try {
        stopNameElement.textContent = 'Loading...';
        let response = await fetch(`${baseUrl}/${stopId}`);

        if (response.status != 200) {
            //alert('Stop ID not found!')
            throw new Error('Stop ID not found!')
        }

        let data = await response.json();
        console.log(data);
        busesElement.innerHTML = '';
        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(bus => {

            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            busesElement.appendChild(liElement);
        })

    } catch (error) {
        stopNameElement.textContent = 'Error';
        busesElement.innerHTML = '';
    }
}