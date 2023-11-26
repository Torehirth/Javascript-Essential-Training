/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("pointerenter", () => {
  gridContainer.style.border = "1px solid red";
});

gridContainer.addEventListener("pointerleave", () => {
  gridContainer.style.border = "";
});

// ------------------------------------

// Selecting all cells using querySelectorAll, this makes a node list/an array.
const cellContainer = document.querySelectorAll(".cell");

// We have to iterate through all cells using a loop, or else the function won't run.
cellContainer.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "skyBlue";
    cell.style.scale = "1.1";
  });

  cell.addEventListener("mouseleave", () => {
    cell.style.backgroundColor = "";
    cell.style.scale = "";
  });

  //
  cell.addEventListener("click", () => {
    if (cell.style.border) {
      cell.style.border = "";
    } else {
      cell.style.border = "3px solid orange";
    }

    console.log(cell.className);
  });
});

// --------------------------------------------

const body = document.querySelector("body");

body.addEventListener("keydown", (KeyboardEvent) => {
  console.log(KeyboardEvent.key);
  console.log(KeyboardEvent.code);

  if (KeyboardEvent.key === "b") {
    body.style.backgroundColor === "" ? (body.style.backgroundColor = "#090909") : (body.style.backgroundColor = "");
  }
});
