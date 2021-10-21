let headerTitle = document.querySelector('.header-title'),
    labs = document.querySelectorAll('.nav-link'),
    exercises = document.querySelectorAll('.exercise-item');

let currentLaba = +getLastSign(headerTitle);  


function getLastSign(title) {
    let trimmedTitle = title.textContent.trim();
    return trimmedTitle[trimmedTitle.length - 1] - 1;
}

function indicateCurrentLaba() { 
    let arrayOfLabs = [].slice.call(labs), // Nodelist -> Array
        laba = arrayOfLabs[currentLaba];

    laba.style.borderColor = 'orange';
    laba.style.color = 'orange';
}

function startExercisesHandler() {
    // let arrayOfExercises = [].slice.call(exercises);
    // for (let i = 0; i < arrayOfExercises.length; i++) {
    //     arrayOfExercises[i].addEventListener('click', () => {
    //         alert('1')
    //     });
    // }
    exercises.forEach(exercise => {
        exercise.addEventListener('click', event => {
            let chosenExercise = +getLastSign(event.target) + 1;
            switch (chosenExercise) {
                case 1:
                    writeFirstExercise();
                    break;
                case 2:
                    writeSecondExercise();
                    break;
                case 3:
                    writeThirdExercise();
                    break;
                case 4:
                    writeFourthExercise();
                    break;
                case 5:
                    writeFifthExercise();
                    break;
            }
        });
    });
}

function writeFirstExercise() {
    confirm('Поміняйте місцями контент блоків «3» та «6»');
}

function writeSecondExercise() {
    confirm('Напишіть функцію, яка обчислює площу трапеції, беручи необхідні значення із відповідних змінних у скрипті, і виводить отриманий результат в кінці контенту в блоці «5»');
}

function writeThirdExercise() {
    confirm('Напишіть скрипт, який визначає всі дільники заданого натурального числа, беручи це число із відповідної форми в блоці «5», а отриманий результат виводить за допомогою діалогового вікна і зберігає в куках, причому:\n а) при оновленні документа в броузері користувачу за допомогою діалогового вікна виводиться інформація, збережена в куках, із питанням про необхідність зберегти дані із куків, і не виводиться згадана вище форма;\n б) при підтвердженні питання виводиться наступне діалогове вікно із інформуванням користувача про наявність куків і необхідність перезавантаження документа;\n в) при відмові відповідні куки видаляються, і документ оновлюється з початковим станом із наявною формою для введення даних');
}

function writeFourthExercise() {
    confirm('Напишіть скрипт, який при настанні події change встановлює верхній регістр перших літер усіх слів у блоці «4» при встановленні користувачем відповідної радіокнопки у формі і зберігає відповідне значення в локальному сховищі броузера так, щоб при наступному відкриванні документа властивість верхнього регістру перших літер усіх слів у блоці «4» встановлювалась із збереженого значення в локальному сховищі');
}

function writeFifthExercise() {
    confirm('Напишіть скрипт додавання зображень в блок «4»:\n а) необхідні елементи форми появляються у блоці «5» внаслідок кліку на блоці «х» одразу після наявного в блоці «5» контенту;\n б) кількість зображень необмежена, використовуйте зображення з інтернету;\n в) поруч розміщується кнопка, внаслідок натискання на яку внесені дані зображення зберігаються в локальному сховищі броузера (структуровано на ваш розсуд), а саме зображення додається в кінці початкового вмісту блока «4»;\n г) під кожним новим зображенням розміщується кнопка, внаслідок натискання на яку нове зображення видаляється із локального сховища броузера і припиняється його відображення у блоці «4» без перезавантаження документа');
}

function loadScripts() {
    indicateCurrentLaba();
    startExercisesHandler();
}