const input = document.getElementById('search');
const btn = document.getElementById('button');

btn.addEventListener('click', onButton);

function onButton() {
    let query = input.value;
    if (query === '') {
        alert("Введите запрос и нажмите 'Найти'");
    } else {
        alert(query);
    }
}

