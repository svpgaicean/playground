let event = new Event('build');

window.addEventListener('build', function(event) {
    console.log(event.type);
}, false);

window.dispatchEvent(event);