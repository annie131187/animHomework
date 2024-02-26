import "../css/style.css";

const button = document.querySelector(".button");
const collapse = document.querySelector(".collapse");

button.addEventListener("click", (evt) => {
  evt.preventDefault();

  collapse.classList.toggle("hide");
});
