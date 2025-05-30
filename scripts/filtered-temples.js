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

// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-rendering-1075606-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-766443-wallpaper.jpg"
  },
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 4840,
    imageUrl: "https://churchofjesuschristtemples.org/hong-kong-china-temple/photographs/#Official-1"
  }
];

// Function to create temple cards
function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    card.innerHTML = `
        <figure>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>${temple.templeName}</figcaption>
        </figure>
        <div class="temple-info">
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </div>
    `;
    
    return card;
}

// Function to display temples
function displayTemples(filteredTemples) {
    const templesContainer = document.getElementById('temples-container');
    templesContainer.innerHTML = '';
    
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        templesContainer.appendChild(card);
    });
}

// Filter functions
function filterOld() {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
    });
    displayTemples(oldTemples);
}

function filterNew() {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
    });
    displayTemples(newTemples);
}

function filterLarge() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
}

function filterSmall() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
}

function filterHome() {
    displayTemples(temples);
}

// Event listeners for navigation
document.addEventListener('DOMContentLoaded', () => {
    // Display all temples initially
    filterHome();
    
    // Set up navigation event listeners
    document.getElementById('home').addEventListener('click', filterHome);
    document.getElementById('old').addEventListener('click', filterOld);
    document.getElementById('new').addEventListener('click', filterNew);
    document.getElementById('large').addEventListener('click', filterLarge);
    document.getElementById('small').addEventListener('click', filterSmall);
    

});