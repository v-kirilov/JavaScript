async function attachEvents() {
    const submitButton = document.getElementById('submit');
    const locationElement = document.getElementById('location');

    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/locations';


    submitButton.addEventListener('click', async () => {
        let location = locationElement.value;
        //let res = await fetch(`${url}/${location}`);
        let res = await fetch(baseUrl);
        let data = await res.json();

        let selectedTown = data.find(obj => {
            return obj.name === location;
        })

        let currRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${selectedTown.code}`);
        let currTownData = await currRes.json();
        console.log(currTownData);
        let futureRes = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${selectedTown.code}`);
        let futureTownData = await futureRes.json();
        //console.log(futureTownData);

        let forecastElement = document.getElementById('forecast');
        let upcomingElement = document.getElementById('upcoming');
        forecastElement.style.display = 'block';

        let spanOne = createElement('span', 'forecast-data', currTownData.name);

        let tempData = currTownData.forecast.low + "\u00B0" + '/' + currTownData.forecast.high + "\u00B0";
        let spanTwo = createElement('span', 'forecast-data', tempData);

        let spanThree = createElement('span', 'forecast-data', currTownData.forecast.condition);

        let weatherSymbol = symbol(currTownData.forecast.condition);
        let conditionSymbolElement = createElement('span', 'condition', weatherSymbol);
        conditionSymbolElement.classList.add('symbol');
        //console.log(conditionSymbolElement);
        let innerForecastsDiv = createElement('div', 'forecasts', '');
        let currentDivElement = document.getElementById('current');
        let conditionElement = createElement('span', 'condition', '');
        conditionElement.appendChild(spanOne);
        conditionElement.appendChild(spanTwo);
        conditionElement.appendChild(spanThree);

        innerForecastsDiv.appendChild(conditionSymbolElement);
        innerForecastsDiv.appendChild(conditionElement);

        currentDivElement.appendChild(innerForecastsDiv);

        let forecastInfoElement = createElement('div', 'forecast-info', '');
        upcomingElement.appendChild(forecastInfoElement);

        let futureData = futureTownData.forecast;
        for (const el of futureData) {
            let upcomingSpanElement = createElement('span', 'upcoming', '');
            let conditionSymbol = symbol(el.condition);
            let upcomingSymbolElement = createElement('span', 'symbol', conditionSymbol);
            let upcomingTemps = createElement('span', 'forecast-data', '');
            upcomingTemps.textContent = el.low + "\u00B0" + '/' + el.high + "\u00B0";
            let conditionElementFinal = createElement('span', 'forecast-data', el.condition);

            upcomingSpanElement.appendChild(upcomingSymbolElement);
            upcomingSpanElement.appendChild(upcomingTemps);
            upcomingSpanElement.appendChild(conditionElementFinal);
            forecastInfoElement.appendChild(upcomingSpanElement);
        }

        console.log(futureData);

    });

    function createElement(type, className, myTextContent) {
        let element = document.createElement(type);
        element.classList.add(className);
        element.textContent = myTextContent;
        return element;
    };
    function symbol(weather) {
        if (weather == 'Rain') {
            return '\u2614'
        } else if (weather == 'Sunny') {
            return '\u2600'
        } else if (weather == 'Partly sunny') {
            return '\u26C5'
        } else if (weather == 'Overcast') {
            return '\u2601'
        }
    };
}

attachEvents();