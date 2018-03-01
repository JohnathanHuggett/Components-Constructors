let button = document.querySelector(".Dropdown__button")
let dropdown = document.querySelector(".Dropdown__content");

button.addEventListener("click", () => {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block"
    } else {
        dropdown.style.display = "none"
    }
});