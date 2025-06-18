const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];
  
const date = new Date;
const year = document.getElementById('currentyear');

year.innerHTML += date.getFullYear();



const modified = document.getElementById('lastModified');
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;

const product = document.getElementById('product');
products.forEach(p => {
    const option = document.createElement('option');
    option.setAttribute('value', p.id);
    option.innerHTML = p.name;

    product.appendChild(option);
});