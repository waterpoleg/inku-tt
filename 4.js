const msgForGoogle = 'Yandex круче. Но это не точно';

const input = document.getElementById('search');
const btn = document.getElementById('button');

btn.addEventListener('click', onButton);

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
}
