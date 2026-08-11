const API_KEY = import.meta.env.VITE_API_KEY;

const baseURL = "https://geo.ipify.org/api/v2/country";
const ipAddress = "8.8.8.8";

fetch(`${baseURL}?apiKey=${API_KEY}&ipAddress=${ipAddress}`, { method: "GET" })
  .then((response) => response.json())
  .then((data) => showDetails(data));

function showDetails(data) {
  // ip address
  document.getElementById("ip-address").textContent = `${data.ip}`;

  //  location
  document.getElementById("region").textContent = `${data.location.region}`;
  document.getElementById("country").textContent = `${data.location.country}`;

  //   timezone
  document.getElementById("timezone").textContent = `${data.location.timezone}`;

  //   isp
  document.getElementById("isp").textContent = `${data.isp}`;
}
