let link = document.getElementById('google-link');

link.addEventListener('mouseenter', function(event) {
    console.log('Hover on link: ', event.target.text);
});

link.addEventListener('mouseenter', function() {
    console.log('Hover once');
},
{ once: true }
);