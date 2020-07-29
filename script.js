const mymap = L.map('mapid').setView([0, 0], 2);
//attribute needed to used open street map
const attribution = '&copy; <a "href=https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//url for tiles from open street map
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution }).addTo(mymap);


//url for ISS API
const url = 'https://api.wheretheiss.at/v1/satellites/25544';

// getData function
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    const { latitude, longitude, visibility, timestamp, name, id, altitude } = data;

    L.marker([latitude, longitude]).addTo(mymap);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('vis').textContent = visibility;
    document.getElementById('time').textContent = timestamp;
    document.getElementById('name').textContent = name;
    document.getElementById('id').textContent = id;
    document.getElementById('alt').textContent = altitude;
};