/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

// -----------------------------------------------

// Importing Backpack from Backpack.js file (default).
import Backpack from "./Backpack.js";

// Creating an object from the class Backpack and assigning values to the different properties.
const climbingBackpack = new Backpack("Climbing Backpack", 45, "blue", 6, 55, 55, false);

console.log(climbingBackpack);

// -------------------------------------------------

// Creating a new class and storing it as a variable:
const Car = class {
  constructor(
    // Defines parameters:
    brand,
    model,
    fuel,
    wheels,
    colour,
    ignitionOn,
    driveForward
  ) {
    // Define properties:
    this.brand = brand;
    this.model = model;
    this.fuel = fuel;
    this.wheels = wheels;
    this.colour = colour;
    this.ignitionOn = ignitionOn;
    this.driveForward = driveForward;
  }
  // Add methods as normal functions:
  toggleIgnition(ignitionStatus) {
    this.ignitionOn = ignitionStatus;
  }
  startDriving(drivingStatus) {
    this.driveForward = drivingStatus;
  }
};

export { Car };
