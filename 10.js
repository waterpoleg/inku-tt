const msgForGoogle = 'Yandex круче. Но это не точно';

const db = [
    {name: 'Alex', age: 18},
    {name: 'Mary', age: 21},
    {name: 'Dmitry', age: 35},
    {name: 'Lena', age: 27}
]

const input = document.getElementById('search');
const btn = document.getElementById('button');

btn.addEventListener('click', timeout);

function timeout() {
    setTimeout(onButton, 3000);
}

function onButton() {
    let query = input.value;
    switch (query) {
        case '': {
            alert("Введите запрос и нажмите 'Найти'");
            break;
        }
        case 'google': {
            alert(msgForGoogle);
            break;
        }
        default:
            alert(query);
            break;
    }
    /*
    * Не совсем понятно из задания где именно нужно выводить свойство name 1-го элемента массива.
    * Это можно сделать выше в блоке switch в каждом alert просто написав, например:
    * alert(msgForGoogle + ' ' +  db[0].name)
    * Или отдельным alert в начале функции onButton, или как сделал я - отдельно после всех.
    * */
    alert(db[0].name);
}

