/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// -----------------Making a function declaration--------------------

function heading() {
  const main = document.querySelector("main");

  const content = "Making a function declaration";

  const headingText = document.createElement("h1");

  headingText.classList.add("heading");
  headingText.setAttribute("id", "heading");
  headingText.style.color = "darkMagenta";
  headingText.style.textAlign = "center";
  headingText.style.padding = "1em 0";

  headingText.innerText = content;

  main.append(headingText);
}

heading();
// console.log(heading);
console.dir(heading);

// -----------------Making a function expression--------------------

const subHeading = function () {
  const element = document.querySelector("main");

  const container = document.createElement("div");
  const subHeadingText = document.createElement("h3");
  const content = "This is the result of the function expression";

  container.classList.add("container");
  container.style.backgroundColor = "lightgrey";
  container.style.width = "100%";
  container.style.height = "10em";

  subHeadingText.classList.add("sub-heading");
  subHeadingText.style.fontFamily = "sans-serif";
  subHeadingText.style.textAlign = "center";
  subHeadingText.style.display = "block";
  subHeadingText.style.paddingTop = "3.5em";
  subHeadingText.innerText = content;

  element.append(container);
  container.append(subHeadingText);
};

subHeading();
// console.log(subHeading);
console.dir(subHeading);

// -----------------Making an arrow function------------------------

const paragraph = () => {
  const element = document.querySelector("main");

  const container = document.createElement("div");
  const subHeadingText = document.createElement("h3");
  const content = "This is the result of the arrow function";

  container.classList.add("container");
  container.style.backgroundColor = "lightgrey";
  container.style.width = "100%";
  container.style.height = "10em";

  subHeadingText.classList.add("sub-heading");
  subHeadingText.style.fontFamily = "sans-serif";
  subHeadingText.style.textAlign = "center";
  subHeadingText.style.display = "block";
  subHeadingText.style.paddingTop = "3.5em";
  subHeadingText.innerText = content;

  element.prepend(container);
  container.append(subHeadingText);
};

paragraph();
