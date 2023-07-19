// INFO PASSENGER
const tripLength = prompt("quanti chilometri desideri percorrere in treno?");
console.log("lunghezza viaggio: " + tripLength);

const passengerAge = prompt("quanti anni hai?");
console.log("età passeggero: " + passengerAge);

// FIXED PRICE
let price = 0.21;

// STRING AGE >> NUMBER AGE
const passengerAgeParse = parseInt(passengerAge);
console.log(passengerAgeParse);

// DISCOUNT AGE
let discountPriceU18;
let discountPriceO65;

if (passengerAgeParse < 18) {
  discountPriceU18 = (price * 20) / 100;
  console.log(discountPriceU18);
}

if (passengerAgeParse > 65) {
  discountPriceO65 = (price * 40) / 100;
  console.log(discountPriceO65);
}

// FINAL PRICE
let finalPrice;

if (passengerAgeParse < 18) {
  finalPrice = price * tripLength - discountPriceU18 * tripLength;
  console.log("prezzo finale " + finalPrice);
} else if (passengerAgeParse > 65) {
  finalPrice = price * tripLength - discountPriceO65 * tripLength;
  console.log("prezzo finale " + finalPrice);
} else {
  finalPrice = price * tripLength;
  console.log("prezzo finale " + finalPrice);
}
