const newList = document.querySelectorAll(".item");
console.log(`Number of categories ${newList.length}`);
newList.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
