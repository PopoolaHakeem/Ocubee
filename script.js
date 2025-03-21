
var menuicon = document.querySelector("#menu-icon");
var mobilenav = document.querySelector(".mobile-nav");
var cancelicon = document.querySelector("#cancel-icon")


menuicon.onclick = function() {
    menuicon.style.display = 'none'
    cancelicon.style.display ='block'
    mobilenav.style.display = 'block'

}

cancelicon.onclick = function() {
    cancelicon.style.display = 'none'
    mobilenav.style.display = 'none'
    menuicon.style.display = 'block'
}