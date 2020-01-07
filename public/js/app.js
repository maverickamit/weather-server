console.log("client side javascript file is loaded!");

fetch("http://localhost:3000/weather?address=kolkata").then(res => {
  res.json().then(data => {
    if (data.error) {
      console.log("error");
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;

  console.log(location);
});
