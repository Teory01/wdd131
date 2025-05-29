// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.primary-nav');

hamburger.addEventListener('click', () => {
  const isExpanded = nav.getAttribute('data-visible') === 'true';
  nav.setAttribute('data-visible', !isExpanded);
  hamburger.setAttribute('aria-expanded', !isExpanded);
});

// Display current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;