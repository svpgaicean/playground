let link = document.getElementById('google-link');

function eventHandler(event) {
    console.log(event.type + ' on link ', event.target.text);
}

link.addEventListener('mouseenter', eventHandler, {once:true});
link.addEventListener('mouseleave', eventHandler);
// link.removeEventListener('mouseenter', eventHandler);
// link.removeEventListener('mouseleave', eventHandler);

window.addEventListener('click', function() {
    document.documentElement.requestFullscreen();
});

document.addEventListener('fullscreenchange', eventHandler);
link.addEventListener('mouseout', eventHandler);