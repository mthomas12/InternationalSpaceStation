const url = 'https://api.wheretheiss.at/v1/satellites/25544';

// getData function
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    const { latitude, longitude, visibility, timestamp, name, id, altitude } = data;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('vis').textContent = visibility;
    document.getElementById('time').textContent = timestamp;
    document.getElementById('name').textContent = name;
    document.getElementById('id').textContent = id;
    document.getElementById('alt').textContent = altitude;
}