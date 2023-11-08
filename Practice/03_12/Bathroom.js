import { Bathroom } from "./Mycar.js";

const MyBathroom = new Bathroom("King Kong", 1, "white");

console.log(MyBathroom);

MyBathroom.toggleShower(false);
console.log(MyBathroom.showerOn);
