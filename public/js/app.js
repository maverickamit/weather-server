console.log("client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#one");
const messageTwo = document.querySelector("#two");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!search.value) {
  }

  const location = search.value;
  const fetchURL = "http://localhost:3000/weather?address=" + location;
  messageOne.textContent = "";

  messageTwo.textContent = "Loading ...";

  fetch(fetchURL).then(res => {
    res.json().then(data => {
      if (data.error) {
        messageTwo.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
