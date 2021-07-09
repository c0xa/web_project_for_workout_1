
function createHtml(data) {
    let block = '<div class="ya-dzen__ya-dzen-item ya-dzen-item">' +
        '<span class="ya-dzen-item__label">' + data.label + '</span> ' +
        '<span class="ya-dzen-item__text">' + data.text + '</span> ' +
        '</div>';
    return block;
}

let block = document.querySelector('.ya-dzen');

function createBlock(data) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = createHtml(data);
    block.appendChild(newDiv);
}

const urlToFetch = "dzen.json";
const controller = new AbortController()
const signal = controller.signal

signal.addEventListener("abort", () => {
    console.log("aborted!")
})

function addBlock() {
    let data;
    fetch(urlToFetch, {
        method: 'get',
        signal: signal,
    })
        .then(response => {
            return response.json();
        })
        .then(json => {
            data = json;
            data.forEach(part => createBlock(part));
        })
        .catch(function(err) {
            console.error(' Err: ${err}');
    });
}

function abortFetching() {
    console.log('Now aborting');
    controller.abort()
}

addBlock();

window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
        addBlock();
    }
}, {
    passive: true
});

//notification
const notification = document.querySelector(".ya-notification__covid-histogram");
const notificationCovid = document.querySelector(".ya-covid-histogram");
const close = document.querySelector(".ya-covid-histogram__icon.close-icon");

function mouseover() {
    notificationCovid.classList.add("_move");
    close.classList.add("_view");
}

function mouseout() {
    notificationCovid.classList.remove("_move");
    close.classList.remove("_view");
}

notification.addEventListener("mouseover", mouseover)
notification.addEventListener("mouseout", mouseout)

notificationCovid.addEventListener("click", function () {
    notification.removeEventListener("mouseover", mouseover);
    notification.removeEventListener("mouseout", mouseout);

    notificationCovid.classList.add("_move");
    close.classList.add("_view");
})

close.addEventListener("click", function () {
    notificationCovid.classList.remove("_move");
    close.classList.remove("_view");

    notification.addEventListener("mouseover", mouseover);
    notification.addEventListener("mouseout", mouseout);
})

const input = document.querySelector(".ya-bar-form__input");
const microIcon = document.querySelector(".micro-icon");
const keyboardIcon = document.querySelector(".keyboard-icon");
const closeIcon = document.querySelector(".close-icon");

input.addEventListener("focus", function () {
    keyboardIcon.style.opacity = "0";
    microIcon.style.opacity = "0";
    closeIcon.style.opacity = "1";
})

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