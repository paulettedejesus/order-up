console.log("Hello from script.js");

const tags = ["Vegan", "Savory", "Brunch/Lunch"];
const prices = [15.50, 8, 13, 11, 9.5];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}

let total = 0;
for  (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

document.querySelector("#total").textContent = "$" + total;


//Bonus 2
const tax = total * 0.07;
const totalWithTax = total + tax;
document.querySelector("#tax").textContent = "Tax: $" + tax.toFixed(2);
document.querySelector("#total-with-tax").textContent = "Total with tax: $" + totalWithTax.toFixed(2);

//Bonus 3
let cheapCount = 0;
for (let i = 0; i < prices.length; i++) {
    if(prices[i] < 5) {
        cheapCount = cheapCount + 1
    }
}

document.querySelector("#cheap"),textContent = cheapCount + " items under $5";