document.getElementById("get-location").addEventListener("submit", getLocation);

function getLocation(e) {
  e.preventDefault();

  const API_KEY = import.meta.env.VITE_API_KEY;
  const baseURL = "https://geo.ipify.org/api/v2/country,city";
  const ipAddress = document.getElementById("ip-address-input").value;

  fetch(`${baseURL}?apiKey=${API_KEY}&ipAddress=${ipAddress}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => showDetails(data));

  document.getElementById("ip-address-input").value = " ";
}

let map;

function showDetails(data) {
  console.log(data.location);
  // ip address
  document.getElementById("ip-address").textContent = `${data.ip}`;

  //  location
  document.getElementById("city").textContent = `${data.location.city}`;
  document.getElementById("region").textContent = `${data.location.region}`;
  document.getElementById("country").textContent = `${data.location.country}`;

  //   timezone
  document.getElementById("timezone").textContent = `${data.location.timezone}`;

  //   isp
  document.getElementById("isp").textContent = `${data.isp}`;

  // Coordinates
  const lat = data.location.lat;
  const lng = data.location.lng;

  // Create map only once
  if (!map) {
    map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);
  } else {
    // Move existing map
    map.setView([lat, lng], 13);
  }

  // Add marker
  L.marker([lat, lng]).addTo(map);
}
