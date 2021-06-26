const input = document.querySelector(".bar-form__input");
const actions = document.querySelector("input ~ div");

input.addEventListener("focus", function () {
    actions.style.opacity = "0";
})

input.addEventListener("blur", function () {
    if (input.value.length > 5) {
        console.log(input.value.length);
        actions.style.opacity = "0";
    } else {
        actions.style.opacity = "1";
    }
})