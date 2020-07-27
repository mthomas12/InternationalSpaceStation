const url = 'https://api.wheretheiss.at/v1/satellites/25544';

// getData function
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    const { latitude, longitude, visibility, timestamp, name, id } = data;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('vis').textContent = visibility;
    document.getElementById('time').textContent = timestamp;
    document.getElementById('name').textContent = name;
    document.getElementById('id').textContent = id;
}

function status(res) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;
}
// call funtion
getData();