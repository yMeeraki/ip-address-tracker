const API_KEY = import.meta.env.VITE_API_KEY;

const baseURL = "https://geo.ipify.org/api/v2/country";
const ipAddress = "8.8.8.8";

fetch(`${baseURL}?apiKey=${API_KEY}&ipAddress=${ipAddress}`, { method: "GET" })
  .then((response) => response.json())
  .then((data) => showDetails(data));

function showDetails(data) {
  // ip address
  console.log(data.ip);

  //  location
  console.log(data.location.region);
  console.log(data.location.country);

  //   timezone
  console.log(data.location.timezone);

  //   isp
  console.log(data.isp);
}
