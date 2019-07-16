document.addEventListener('DOMContentLoaded', function () {

    var myMenuButton = document.querySelector('.menu-button');
    var myMainMenu = document.querySelector('header .site-nav');
    myMenuButton.addEventListener('click', function () {
        myMainMenu.classList.toggle('expanded');
    });

});
