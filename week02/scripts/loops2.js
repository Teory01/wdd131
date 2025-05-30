const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }

// while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// forEach loop
studentReport.forEach(function (item) {
if (item < LIMIT) {
    console.log(item);
}
});

// for...in loop
for (let i in studentReport) {
if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
}
}

let tomorrow = new Date();
let q = 0;
while (q < DAYS) {
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.querySelector("#date").innerHTML += `${tomorrow.toDateString()}<br>`;
    q++;
}
