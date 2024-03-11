
// Function to apply colorful animation effect to time slots on hover
function addColorfulEffect() {
  const timetableRows = document.querySelectorAll(".timetable tr:not(:first-child)");

  timetableRows.forEach(row => {
    const classCells = row.querySelectorAll("td:not(:first-child)");

    classCells.forEach(cell => {
      cell.addEventListener("mouseover", () => {
        cell.classList.add("colorful-effect");
      });

      cell.addEventListener("mouseout", () => {
        cell.classList.remove("colorful-effect");
      });
    });
  });
}

// Execute the function when the page is loaded
window.addEventListener("load", addColorfulEffect);

// Function to add random colors to each class cell
function addRandomColors() {
  const timetableRows = document.querySelectorAll(".timetable tr:not(:first-child)");

  timetableRows.forEach(row => {
    const classCells = row.querySelectorAll("td:not(:first-child)");

    classCells.forEach(cell => {
      const randomColor = getRandomColor();
      cell.style.backgroundColor = randomColor;
    });
  });
}


// Function to add random colors to each class cell, titles, days, and day columns
function addRandomColors() {
  const timetable = document.getElementById("timetable");

  // Titles (class names)
  const classNames = timetable.querySelectorAll("th:not(:first-child)");
  classNames.forEach(title => {
    const randomColor = getRandomColor();
    title.style.backgroundColor = randomColor;
    title.style.color = getTextColor(randomColor);
  });

  // Days of the week
  const days = timetable.querySelectorAll("tr:first-child th:not(:first-child)");
  days.forEach(day => {
    const randomColor = getRandomColor();
    day.style.backgroundColor = randomColor;
    day.style.color = getTextColor(randomColor);
  });

  // Class cells
  const timetableRows = document.querySelectorAll(".timetable tr:not(:first-child)");
  timetableRows.forEach(row => {
    const classCells = row.querySelectorAll("td:not(:first-child)");
    classCells.forEach(cell => {
      const randomColor = getRandomColor();
      cell.style.backgroundColor = randomColor;
      cell.style.color = getTextColor(randomColor);
    });
  });

  // Day columns
  const dayColumns = timetable.querySelectorAll("td:first-child");
  dayColumns.forEach(column => {
    const randomColor = getRandomColor();
    column.style.backgroundColor = randomColor;
    column.style.color = getTextColor(randomColor);
  });
}

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to get the text color (white or black) based on the background color
function getTextColor(backgroundColor) {
  // Convert the hexadecimal color to RGB components
  const rgb = parseInt(backgroundColor.substr(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;

  // Calculate the luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return white (#ffffff) for dark backgrounds, and black (#000000) for light backgrounds
  return luminance > 0.5 ? "#000000" : "#ffffff";
}

// Execute the function when the page is loaded
window.addEventListener("load", addRandomColors);
