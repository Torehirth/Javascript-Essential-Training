/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const pageHeaderParagraph = document.querySelector(".page-header p");
// console.log(pageHeaderParagraph);

// -------------------------------------------

const backpackFeatures = document.querySelectorAll(".backpack__features li");
// console.log(backpackFeatures);

backpackFeatures.forEach((i) => {
  // console.log(i);
});

// -------------------------------------------

const test = document.querySelector(".backpack__features .backpack__color");
console.log(test);

test.style.backgroundColor = "pink";
test.lastChild.innerHTML = "New Colour";
