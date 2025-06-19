// techTopics.js


const services = {
    "available": [
        "JavaScript Tips",
        "CSS Tricks",
        "HTML5 Essentials",
        "React Basics",
        "Web Performance",
        "Git & GitHub",
        "Responsive Design",
        "VS Code Shortcuts",
        "Accessibility",
        "DevTools Guide"
    ],
    "comingSoon": [
        "Node.js Tutorials",
        "Web3 for Beginners",
        "TypeScript Intro",
        "TailwindCSS",
        "Svelte Overview",
        "Advanced React Patterns",
        "Next.js Guide",
        "Career in Tech",
        "Design Systems",
        "Security Essentials"
    ]
};

const mySidenav = document.getElementById("mySidenav");
const serviceUnorderedList = document.getElementById('serviceUnorderedList');
const comingSoon = document.getElementById('comingSoonUnorderedList');



document.querySelectorAll('.find, #sideMenu').forEach((item) => {
    item.addEventListener('click', () => {
        mySidenav.style.left = '0';
        document.body.style.overflowY = "hidden";
        document.querySelector('.just').style.display = "block";
        document.querySelector('.close').style.display = "flex";

        while (serviceUnorderedList.children.length > 1) {
            serviceUnorderedList.removeChild(serviceUnorderedList.lastChild);
        }
        while (comingSoonUnorderedList.children.length > 1) {
            comingSoonUnorderedList.removeChild(comingSoonUnorderedList.lastChild);
        }

    
        services.available.forEach((service) => {
            const serviceList = document.createElement('li');
            const serviceLinks = document.createElement('a');
            serviceLinks.textContent = service;
            serviceLinks.setAttribute('href', "tel:+2349136196176");
            serviceLinks.setAttribute('class', 'serviceNames');
    
            serviceList.appendChild(serviceLinks);
            serviceUnorderedList.appendChild(serviceList);
            document.getElementById('serviceContainer').append(serviceUnorderedList);
        });
        
        services.comingSoon.forEach((service) => {
            const comingSoonList = document.createElement('li');
            // const comingSoonLinks = document.createElement('a');
            comingSoonList.textContent = service;
            comingSoonList.setAttribute('class', 'serviceNames');
        
            comingSoon.appendChild(comingSoonList);
            document.getElementById('serviceContainer').append(comingSoon);
        });

        document.querySelector(".just").addEventListener('click', () => { 
        mySidenav.style.left = '';
        document.body.style.overflowY = "";
        document.querySelector('.just').style.display = "";
        document.querySelector('.close').style.display = "";
        });

        document.querySelectorAll('.serviceNames').forEach((service) => { 
            service.addEventListener('click', (e) => {
                let storedServices = JSON.parse(localStorage.getItem('services')) || [];
                if (!storedServices.includes(e.target.textContent)) {
                    storedServices.push(e.target.textContent);
                }
                localStorage.setItem('services', JSON.stringify(storedServices));
            })
        });
    });    

});



document.querySelector('.close').addEventListener('click', () => {
    mySidenav.style.left = '';
    document.body.style.overflowY = "";
    document.querySelector('.just').style.display = "";
    document.querySelector('.close').style.display = "";
    // serviceUnorderedList.innerHTML = `<li><span>Available Services</span></li>`;
    // comingSoon.innerHTML = `<li><span>Coming Soon</span></li>`;
});

const recentsh2 = document.querySelector('.recentContainer section h2');
const recentUl = document.createElement('ul');
document.querySelector(".recent").addEventListener('click', () => { 
    
    document.querySelector(".recentContainer").style.right = '0';
    document.body.style.overflowY = "hidden";
    document.querySelector('.justrecent').style.display = "block";

    if (JSON.parse(localStorage.getItem('services') === null)) {
        recentsh2.innerHTML = 'No services selected yet!';
        recentsh2.style.fontSize = "25px";
        recentsh2.style.fontWeight = "400";
    } else {
        if (recentUl) {
            recentUl.innerHTML = '';
        }
        recentsh2.innerHTML = 'Your Recents';
        recentsh2.style.fontWeight = "500";
        let recentServices = JSON.parse(localStorage.getItem('services'));
        recentServices.forEach((service) => {
            const recentList = document.createElement('li');
            recentList.innerHTML = `<a href="tel:+2349136196176">${service}</a>`;
            recentList.setAttribute('class', 'recentServices');
            recentUl.appendChild(recentList);
            document.querySelector('.recentContainer section').append(recentUl);
            
        });
    }

    document.querySelector(".justrecent").addEventListener('click', () => { 
        document.querySelector(".recentContainer").style.right = '';
        document.body.style.overflowY = "";
        document.querySelector('.justrecent').style.display = "";
    });
});
document.querySelectorAll('.populate a').forEach((a) => {
    a.setAttribute('href', 'tel:+2349136196176');
})

document.querySelectorAll(".anticipate a, .anticipate span").forEach((a) => { 
    a.style.cursor = 'pointer';
    a.addEventListener('click', () => {
        alert('This Page is currently under maintanence. Please check back later or Contact Support.')
    })
});

const lastModifiedContainer = document.createElement('p'),
    lastModified = new Date(document.lastModified);

lastModifiedContainer.innerHTML = `<strong>Last Modified: </strong>${lastModified}`;
document.querySelector('.copyright').append(lastModifiedContainer);

export default services;
