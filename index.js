const API_KEY = import.meta.env.VITE_API_KEY;

console.log(API_KEY);

const baseURL = "https://geo.ipify.org/api/v2/country";
const ipAddress = "8.8.8.8"

fetch(`${baseURL}?apiKey=${API_KEY}&ipAddress=${ipAddress}`, { method: "GET" })
  .then((response) => response.json())
  .then((data) => console.log(data));
