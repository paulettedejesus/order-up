console.log("Hello from script.js");

const tags = ["vegan", "spicy", "late night"];
const prices = [15.50, 8, 13, 11];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}

