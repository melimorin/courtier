function toggle() {
    var element = document.getElementById('nav-menu');
    var classes = element.classList;

    if(classes.length === 3) {
        element.classList.remove('active');

    } else {
        element.classList.add('active');

    }

}