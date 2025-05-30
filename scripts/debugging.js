// Correct element selection - assuming you have elements with these IDs
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area'); // Changed from querySelector('area')

// Constants
const PI = 3.14159;

// Function to calculate area
function calculateArea(radius) {
  return PI * radius * radius;
}

// First calculation
let radius = 10;
let area = calculateArea(radius);
radiusOutput.textContent = radius;
areaOutput.textContent = area.toFixed(2); // Format to 2 decimal places

// Second calculation
radius = 20;
area = calculateArea(radius);
radiusOutput.textContent = radius;
areaOutput.textContent = area.toFixed(2);