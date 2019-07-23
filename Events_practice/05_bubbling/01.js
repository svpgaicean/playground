let container = document.getElementById('container');
let page = document.getElementById('page');

function eventHandler(event) {
    console.log(event.type + ' on ' + event.currentTarget.id);
}

page.addEventListener('click', eventHandler);
container.addEventListener('click', eventHandler);