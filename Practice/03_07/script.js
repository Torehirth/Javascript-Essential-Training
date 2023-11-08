/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Object cotaining arrays of objects, method/function, array and different values.
const combiRefrigerator = {
  refrigerator: {
    numberOfShelfs: 4,
    numberOfDrawers: 2,
    objects: {
      shelfs: true,
      drawers: true,
    },
    content: [
      {
        milk: true,
        sour: false,
        count: 2,
      },
      {
        butter: false,
        count: null,
      },
      {
        beer: true,
        count: 6,
      },
      {
        soda: false,
        count: 0,
      },
    ],
  },
  freezer: {
    numberOfDrawers: 3,
    content: ["pizza", "iceCream", "meat", "frenchFries"],
  },
  doorOpen: false,
  doorStatus: function () {
    if (this.doorOpen) {
      this.doorOpen = false;
    } else {
      this.doorOpen = true;
    }
  },
};

// logging the object in console
console.log(combiRefrigerator);

// Calls out the function to toggle the door closed/open
combiRefrigerator.doorStatus();
console.log(`door is open: ${combiRefrigerator.doorOpen}`);

// Calls out the function to toggle the door closed/open
combiRefrigerator.doorStatus();
console.log(`door is open: ${combiRefrigerator.doorOpen}`);
