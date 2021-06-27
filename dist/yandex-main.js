
const input = document.querySelector(".bar-form__input");
const microIcon = document.querySelector(".micro-icon");
const keyboardIcon = document.querySelector(".keyboard-icon");
const closeIcon = document.querySelector(".close-icon");

input.addEventListener("focus", function () {
    keyboardIcon.style.opacity = "0";
    microIcon.style.opacity = "0";
    closeIcon.style.opacity = "1";
})

if (input.value.length > 100) {
    closeIcon.style.opacity = "0";
}

input.addEventListener("blur", function () {
    if (input.value.length > 0) {
        keyboardIcon.style.opacity = "0";
        microIcon.style.opacity = "0";

    } else {
        keyboardIcon.style.opacity = "1";
        microIcon.style.opacity = "1";
        closeIcon.style.opacity = "0";
    }
})

input.addEventListener("blur", function () {
    if (input.value.length > 100) {
        closeIcon.style.opacity = "0";
    }
})