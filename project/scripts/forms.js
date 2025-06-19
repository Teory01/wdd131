import services from "./sidenav.js";

const category = document.getElementById("category");

services.available.forEach((service) => { 
  const option = document.createElement("option");
//   option.value = service.category;
  option.textContent = service;
  category.appendChild(option);
});

services.comingSoon.forEach((service) => { 
    const option = document.createElement("option");
  //   option.value = service.category;
    option.innerHTML += `<option>${service}</option>`;
    category.appendChild(option);
});
  
const submit = document.getElementById("submit");
const agree = document.getElementById("agree");

agree.addEventListener("change", () => {
  if (agree.checked) {
    submit.disabled = false;
    submit.classList.add("disabl")
  } else {
    submit.disabled = true;
    submit.classList.remove("disabl");
  }
});



