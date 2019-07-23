window.onload = function() {
    alert('The page is loaded.');

    let link = document.getElementById('google-link');
    link.onclick = function() {
        console.log('Clicked on link');
    }
}

let b = document.