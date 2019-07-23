let button = document.getElementById('btn');
let img = document.getElementById('img');
let button2 = document.getElementById('btn2');
let body = document.getElementById('body');

function showImage() {
    if (document.getElementById('img') != null) {
        img.hidden = false;
        img.addEventListener('click', hideImage);
    }
    else {
        alert('Image was removed from DOM.');
    }
    event.stopPropagation();
}

function hideImage() {
    img.hidden = true;
}

function removeBtn() {
    img.remove();
    img.removeEventListener('click', hideImage);
}

function logThis() {
    console.log('target: ' + event.target,
                'currentTarget: ' + event.currentTarget);
    alert('Something was clicked');
}

button.addEventListener('click', showImage); 
button2.addEventListener('click', removeBtn);
img.addEventListener('click', hideImage);
body.addEventListener('click', logThis);
