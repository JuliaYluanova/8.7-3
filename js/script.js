// Вводные данные
let minValue = parseInt(prompt('Минимальное знание числа для игры', '-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
minValue < -999 ? minValue = -1000 : minValue;
maxValue > 999 ? maxValue = 1000 : maxValue;

// Запуск игры
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2); 
let orderNumber = 1; 
let gameRun = true; 

let orderNumberField = document.querySelector('#orderNumberField');
let answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;

    // Кнопка "заново"
document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;

    minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    minValue = minValue || -999;
    maxValue = maxValue || 999;
    minValue < -999 ? minValue = -999 : minValue
    maxValue > 999 ? maxValue = 1000 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    answerNumber  = Math.floor((minValue + maxValue) / 2); 
    orderNumber = 1; 
    gameRun = true; 

    orderNumberField = document.querySelector('#orderNumberField');

    orderNumberField.innerText = orderNumber;

    let phraseRandom = Math.round(Math.random() * 3);
    let answerPhrase;
    if ((phraseRandom === 1)) {
                            answerPhrase = `Вы загадали число ${answerNumber }?`;
                            } else if (answerPhrase = (phraseRandom === 2)) {
                            answerPhrase = `Это число ${answerNumber }?`;
                            } else {
                            answerPhrase = `Я знаю, ты загадал ${answerNumber }! Да?`; }
                            answerField.innerText = answerPhrase;
})

//Больше
document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
                answerPhrase = `Вы загадали неверно!`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Увы..` ;
            } else {
                answerPhrase = `Сдаюсь..`;
            }
                
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
                           answerPhrase = `Вы загадали.. ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        }

                        answerField.innerText = answerPhrase;
        }
    }
})

//Меньше
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue) {
            const phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
                answerPhrase = `Вы загадали неверно!`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Увы.. ` ;
            } else {
                answerPhrase = `Сдаюсь..`;
            }
                
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
                           answerPhrase = `Вы загадали.. ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        }

                        answerField.innerText = answerPhrase;
        }
    }
})

//Верно
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round(Math.random() * 3);
        let answerPhrase;
        if (phraseRandom === 1) {
                answerPhrase = `Опять угадали)`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Я профи.`;
            } else {
                answerPhrase = `Как игра?`;
            }
        
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

// Кнопки
let wantPlay = document.querySelector('#want-play');
let start = document.querySelector('#submit');
let gameButton = document.querySelector('#to-game');

// Модальные окна
let firstPage = document.querySelector('.greeting');
let firstModal = document.querySelector('#modal-input');
let secondModal = document.querySelector('#start');
let gameModal = document.querySelector('.game-start');


orderNumberField.innerText = orderNumber;


// Открытие первого модального окна
wantPlay.addEventListener('click', () => {
    firstModal.classList.add('modal-active');
    firstPage.classList.add('greeting-non-active');
})

// Открытие второго модального окна
start.addEventListener('click', () => {
    firstModal.classList.remove('modal-active');
    secondModal.classList.add('modal-active');

    userMin = minValue;
    userMax = maxValue; 

    if ((isNaN(minValue) || isNaN(maxValue)) || ((typeof minValue != number) || (typeof maxValue != number))) {
        minValue = 1;
        maxValue = 100;
    }
})

// Начало игры
gameButton.addEventListener('click', () => {
    secondModal.classList.remove('modal-active');
    gameModal.classList.add('game-start-active');
})


let phraseRandom = Math.round(Math.random() * 3);
let answerPhrase;
if ((phraseRandom === 1)) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Я знаю, ты загадал ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;

document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    gameModal.classList.remove('game-start-active');
    firstModal.classList.add('modal-active');

    minValue = +document.querySelector('#min').value;
    maxValue = +document.querySelector('#max').value;

    answerNumber  = Math.floor((minValue + maxValue) / 2); 
    orderNumber = 1; 
    gameRun = true; 

    orderNumberField = document.querySelector('#orderNumberField');

    orderNumberField.innerText = orderNumber;
       
    let phraseRandom = Math.round(Math.random() * 3);
    let answerPhrase;
    if ((phraseRandom === 1)) {
                            answerPhrase = `Вы загадали число ${answerNumber }?`;
                            } else if (answerPhrase = (phraseRandom === 2)) {
                            answerPhrase = ` Это число ${answerNumber }?`;
                            } else {
                            answerPhrase = `Я знаю, ты загадал ${answerNumber }! Да?`;
                            }

                            answerField.innerText = answerPhrase;

})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue)
        {
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
               answerPhrase = `Вы загадали неправильное число!`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Я сдаюсь..`;
            } else {
                answerPhrase = `Ну и задачка..`;
            }
        }    

            answerField.innerText = answerPhrase; 
            gameRun = false; 
        } else {
            minValue = answerNumber  + 1; 
            answerNumber  = Math.floor((minValue + maxValue) / 2); 
            orderNumber++; 
            orderNumberField.innerText = orderNumber; 
            
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if ((phraseRandom === 1)) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `Я знаю,  ты загадал ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;
                    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue)
        {
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
               answerPhrase = `Вы загадали неправильное число!`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Я сдаюсь..`;
            } else {
                answerPhrase = `Ну и задачка...`;
            }
        }  

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1; 
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++; 
            orderNumberField.innerText = orderNumber; 
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if ((phraseRandom === 1)) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = ` Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = ` Я знаю, ты загадал ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;
                    }
})


document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round(Math.random() * 3);
        let answerPhrase;
        if (phraseRandom === 1) {
                answerPhrase = `Я всегда угадываю`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Профи`;
            } else {
                answerPhrase = `Я справился?`;
            }
        answerField.innerText = answerPhrase;
        gameRun = false;
        firstPage.classList.remove('greeting-non-active');
        gameModal.classList.remove('game-start-active');
    }})