'use strict'

// Получаем необходимые элементы
const colorInput = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const changeColorButton = document.getElementById('btn');
const rangeInput = document.getElementById('range');
const spanInput = document.getElementById('range-span');


// Повесить обработчик события click на кнопку changeColorButton
const loggerOne = function (event) {
    const color = colorInput.value;
    square.style.backgroundColor = color;
}

changeColorButton.addEventListener('click', loggerOne);

// Скрываем кнопку внутри круга
const circleButton = document.getElementById('e_btn');
circleButton.style.display = 'none';

// Повесить обработчик события input на ползунок rangeInput
const loggerTwo = function (event) {
    console.dir(event.type);
    spanInput.textContent = event.target.value
    const value = rangeInput.value;
    const percentageValue = value + '%';
    circle.style.width = percentageValue;
    circle.style.height = percentageValue;
    spanInput.textContent = percentageValue;
}

rangeInput.addEventListener('input', loggerTwo);
rangeInput.addEventListener('change', loggerTwo);





