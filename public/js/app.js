console.log("client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  if(!search.value){
      
  }
  
  const location = search.value;
  const fetchURL = "http://localhost:3000/weather?address=" + location;

  fetch(fetchURL).then(res => {
    res.json().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
});
