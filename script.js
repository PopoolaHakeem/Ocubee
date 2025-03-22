
var menuicon = document.querySelector("#menu-icon");
var cancelicon = document.querySelector("#cancel-icon")
var mobilenav = document.querySelector(".mobile-nav-list");
var mobilenavbar = document.querySelector(".mobile-navbar")

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
