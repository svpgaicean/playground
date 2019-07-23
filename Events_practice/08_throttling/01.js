let cached = null;

window.addEventListener('scroll', function(event) {
    if(!catched) {
        this.setTimeout(function() {
            // Do something here
            catched = null;
        }, 100)
    }
    catched = event;
});
