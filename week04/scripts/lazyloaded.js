const lastModified = document.querySelector("footer>p");
const modifiedDate = new Date(document.lastModified);
lastModified.innerHTML += modifiedDate;