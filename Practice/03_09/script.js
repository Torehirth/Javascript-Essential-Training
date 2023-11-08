/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  // Making a method for changing the name.
  changeName: function (newName) {
    this.name = newName;
  },
  // Making a method for changing the volume.
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },

  // Making a method for changing the colour.
  changeColour: function (newColour) {
    this.color = newColour;
  },

  // Making a method for changing the pocket number.
  changePocketNumber: function (pocketCount) {
    this.pocketNum = pocketCount;
  },
};

// Calling the toggleLid function, to close/open the lid, with a new value as a parameter and logging it to console.
backpack.toggleLid(true);
console.log(`Lid is open: ${backpack.lidOpen}`);

// Calling the newStrapLengt function with a new value (strap length) as a parameter and logging it to console.
backpack.newStrapLength(25, 25);
console.log(`
New left strap length: ${backpack.strapLength.left}
New right strap length: ${backpack.strapLength.right}
`);

// Calling the changeName function with a new value(name) as a parameter and logging it to console.
backpack.changeName("Climbing Backpack");
console.log(`New backpack name: ${backpack.name}`);

// Calling the changeVolume function with a new value() as a parameter and logging it to console.
backpack.changeVolume(10);
console.log(`Backpack volume: ${backpack.volume}`);

// Calling the changeColour function with a new value() as a parameter and logging it to console.
backpack.changeColour("yellow");
console.log(`Backpack colour: ${backpack.color}`);

// Calling the changePocketNumber function with a new value() as a parameter and logging it to console.
backpack.changePocketNumber(6);
console.log(`Backpack pockets: ${backpack.pocketNum}`);
