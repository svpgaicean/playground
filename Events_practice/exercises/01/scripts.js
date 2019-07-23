let button = document.getElementById('btn');

function eventHandler(event) {
    let img = document.getElementById('img');
    img.hidden = false;
}

button.addEventListener('click', eventHandler);
