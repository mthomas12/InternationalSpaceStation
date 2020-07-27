const url = 'https://api.wheretheiss.at/v1/satellites/25544';

// getData function
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    const { latitude, longitude, visibility, timestamp } = data;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('vis').textContent = visibility;
    document.getElementById('time').textContent = timestamp;
}

// call funtion
getData();