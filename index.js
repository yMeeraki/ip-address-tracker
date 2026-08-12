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

function showDetails(data) {
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

  // map
  const map = L.map("map").setView([data.location.lat, data.location.lng], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([data.location.lat, data.location.lng]).addTo(map);
}
