myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  
myInfo.favoriteFoods.forEach(function (food) {
    let favoriteFoods = document.createElement("li");
    favoriteFoods.textContent = food;
    
    document.querySelector("#favorite-foods").appendChild(favoriteFoods);
});

function mapPlaces(e) {
    return `<dt>${e.place}</dt><dd>${e.length}</dd></dt`;
}

document.querySelector("#places-lived").innerHTML = myInfo.placesLived
    .map(mapPlaces)