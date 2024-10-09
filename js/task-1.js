const newCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${newCategories.length}`);
newCategories.forEach((item) => {
console.log(`Category: ${item.firstElementChild.textContent}`);
console.log(`Elements: ${item.lastElementChild.children.length}`);
});


