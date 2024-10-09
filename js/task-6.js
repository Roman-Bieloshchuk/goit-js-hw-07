function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let sizes = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", () => {
  input.value = "";
  clear();
});

function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    console.log("error");
    return;
  }
  createBoxes(Number(input.value));
}

function clear() {
  boxes.innerHTML = "";
  sizes = 30;
}

function createBoxes(amount) {
  clear();

  const elements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "10px";
    elements.push(box);
    sizes += 10;
  }

  boxes.append(...elements);
}
