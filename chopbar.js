/*
  Name: [Your Name Here]
  Date: November 3, 2026
  Lesson 8 Lab - Chop Bar Bill Calculation
*/

// Step 1: Console log on load
console.log("Page Loading...");

// Step 3: Declare global variables
const BAR_NAME = "B's Chop Bar";
const TAX_RATE = 0.15;
let isMember = true;

// Step 4: Check variable types
console.log("Type of BAR_NAME:", typeof BAR_NAME);
console.log("Type of TAX_RATE:", typeof TAX_RATE);
console.log("Type of isMember:", typeof isMember);

// Step 5: Functions
function lineCost(price, qty) {
  return price * qty;
}

function calculateTotal(subtotal) {
  let tax = subtotal * TAX_RATE;
  return subtotal + tax;
}

// Step 6: Arrays & Subtotal Calculation
const items = ["Jollof Rice", "Sobolo"];
const prices = [35, 10];
const quantities = [2, 3];

const jollofCost = lineCost(prices[0], quantities[0]);
const soboloCost = lineCost(prices[1], quantities[1]);
const subtotal = jollofCost + soboloCost;

// Step 7: Logical operators (Discount Check)
const getsDiscount = isMember && subtotal >= 100;
console.log("Eligible for discount?", getsDiscount);

// Step 8: Update DOM with Bar Name and Total
document.getElementById("bar-name").textContent = BAR_NAME;

const grandTotal = calculateTotal(subtotal);
document.getElementById("bill").textContent = `Total: GHS ${grandTotal.toFixed(2)}`;

// Step 9: Display Itemized Receipt
const receiptDiv = document.getElementById("receipt");
receiptDiv.innerHTML = `
  <h3>Receipt</h3>
  <p>${quantities[0]}x ${items[0]} @ GHS ${prices[0].toFixed(2)} = GHS ${jollofCost.toFixed(2)}</p>
  <p>${quantities[1]}x ${items[1]} @ GHS ${prices[1].toFixed(2)} = GHS ${soboloCost.toFixed(2)}</p>
  <p><strong>Subtotal: GHS ${subtotal.toFixed(2)}</strong></p>
`;