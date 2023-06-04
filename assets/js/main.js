let hamburger = $('#hamburger-icon');
let nav = $('nav');
let flag = true; //a flag for the hamburger overlay (if it is open)

//behavior on click
hamburger.click( function() {
    nav.toggle();
    hamburger.toggleClass('active'); //toggles off the active class
    return false;
});

//behavior to close the menu
function closer() {
    nav.toggle();
    hamburger.toggleClass('active'); //toggles off the active class
    openNav();
}

//open when someone clicks on the hamburger icon
function openNav() {
    if (flag) {
        document.getElementByID("myNav").style.height = "100%";
        $(".line").css("background", "white");
        flag = false; //to close the menu
    } else {
        document.getElementByID("myNav").style.height = "0%";
        $(".line").css("background", "black");
        flag = true;
    }
}