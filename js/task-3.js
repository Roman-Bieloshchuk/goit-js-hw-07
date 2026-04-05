const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener("input", (event) => {
  const trimValue = event.currentTarget.value.trim();

  outputValue.textContent = trimValue === "" ? "Anonymous" : trimValue;
});
