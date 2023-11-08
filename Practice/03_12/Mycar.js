// import Car class from script.js

import { Car } from "./script.js";

// Creating an Object from the class of Car and assigning values to the different properties.
const MyCar = new Car("Volkswagen", "Golf", "Diesel", 4, "Grey", true, false);

console.log(MyCar);

// Testing that the function works.
MyCar.toggleIgnition(false);
console.log(MyCar.ignitionOn);

// ----------------------------------------------

// Creating a new class without storing it as a variable:

class Bathroom {
  constructor(
    // Defines parameters:
    toiletType,
    NumberOfsinks,
    wallColour,
    showerOn
  ) {
    // Define properties:
    this.toiletType = toiletType;
    this.NumberOfsinks = NumberOfsinks;
    this.wallColour = wallColour;
    this.showerOn = showerOn;
  }
  // Add methods as normal functions:
  toggleShower(showerStatus) {
    this.showerOn = showerStatus;
  }
}

export { Bathroom };
