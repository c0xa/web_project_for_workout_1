const element = document.querySelector('.img__tag');

const array = ["Заходит дальше тот, кто не знает куда идти",
                "Если ты хочешь быть лучше остальных, нужно делать то, что другие не будут делать",
                "Если ты хочешь увидеть радугу, нужно побыть под дождем",
                "Спасение утопающих это дело самих утопающих",
                "Чтобы решить проблему нужно изменить угол обзора" ]

menu.onclick = function(event) {
    let index = Math.floor(Math.random() * array.length);
    let sentince = array[index];
    element.textContent = sentince;
    return false;
};