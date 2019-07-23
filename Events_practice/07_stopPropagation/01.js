let container = document.getElementById('container');
let page = document.getElementById('page');

function eventHandler(event) {
    console.log(event.type + ' on ' + event.currentTarget.id);
    event.stopPropagation();
}

page.addEventListener('click', eventHandler);
container.addEventListener('click', eventHandler);