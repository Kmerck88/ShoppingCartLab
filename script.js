// ou need to have a list of items on the page to select from.When you click on the “add item” button, this item should be added to your shopping list. 
// When you click on the “remove item” button, the last item should be removed from your shopping list.
// When you click on the “clear list” button, all items should be removed from your shopping list.
// When you click on the “sort list” button, all items should be sorted alphabetically.


const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const clear = document.querySelector("#clear");
const sort = document.querySelector("#sort");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

// You need to have a list of items on the page to select from.When you click on the “add item” button, this item should be added to your shopping list. 

add.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  input.value = "";
});

// Create one array containing objects where each object includes the name and price.

const items = [

  { name: "apple", price: 0.99 },
  { name: "banana", price: 0.99 },
  { name: "orange", price: 0.99 },
  { name: "pear", price: 0.99 },
  { name: "grape", price: 0.99 },
  { name: "pineapple", price: 0.99 },
  { name: "mango", price: 0.99 },]

// When you click on the “add item” button, this item should be added to your shopping list.

// Loop through the arrays, printing out the name and price of each item on a new line

for (let i = 0; i < items.length; i++) {
  let li = document.createElement("li");
  li.textContent = items[i].name + " " + items[i].price;
  list.appendChild(li);
}

// Total up the combined cost of all of your items with the amount’s label being total.

let total = 0;
for (let i = 0; i < items.length; i++) {

  total += items[i].price;

}

let li = document.createElement("li");
li.textContent = "Total: " + total;
list.appendChild(li);



