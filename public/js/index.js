async function getSkiResortData() {
    const url = 'https://ski-resort-forecast.p.rapidapi.com/Mt%20Bachelor/hourly?units=i&el=top&c=false';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '18980b1d78msh88daa39b9009db6p1db2e6jsnc62b11515c85',
            'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}

module.exports = getSkiResortData;

