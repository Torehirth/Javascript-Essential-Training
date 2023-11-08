/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack("Everyday Backpack", 30, "grey", 15, 26, 26, false);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

// Checking if the toggleLid function works in this file also.
everydayPack.toggleLid(true); // Changing the (lidStatus) to true.
console.log(`Lid open: ${everydayPack.lidOpen}`);

