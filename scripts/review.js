const date = new Date;
const year = document.getElementById('currentyear');

year.innerHTML += date.getFullYear();


const modified = document.getElementById('lastModified');
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;

let pageLoad = Number(window.localStorage.getItem("No of Reviews")) || 0;
window.addEventListener("load", () => {
    pageLoad++;

    localStorage.setItem("No of Reviews", pageLoad);
    console.log(`page is fully loaded ${pageLoad}`);
});