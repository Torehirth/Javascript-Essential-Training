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

// ------------------Query Selector-------------------------

const test = document.querySelector(".backpack__features .backpack__color");
// console.log(test);

test.style.backgroundColor = "pink";
test.lastChild.innerHTML = "New Colour";

// ------------------Attributes-------------------------

// const input = document.querySelector("article input");
// console.log(input);

// console.log(input.hasAttribute("name"));

// input.setAttribute("title", "Left strap length"); /*setAttribute(name, value)*/

// console.log(input.getAttribute("title"));

// input.removeAttribute("title");

// -------------------Classes-----------------------

const input = document.querySelector("article input");

input.classList.add("new-class");
input.classList.add("second-class");

input.classList.replace("new-class", "replacedClass");

input.classList.remove("second-class");

// console.log(input.className);

// ------------------Create Element--------------------

const parent = document.querySelector("article#pack02");

const headingText = document.createElement("h3");

headingText.classList.add("new-class");
headingText.setAttribute("id", "new-id");
headingText.innerHTML = "This is my created element with some text";

parent.append(headingText); // This inserts the element as the last element of the parent (article).
// parent.prepend(headingText); // This inserts the element as the first element of the parent (article).
