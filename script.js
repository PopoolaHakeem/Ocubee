
var menuicon = document.querySelector("#menu-icon");
var cancelicon = document.querySelector("#cancel-icon")
var mobilenav = document.querySelector(".mobile-nav-list");
var navbarBg = document.querySelector(".ocube-navbar");

// var mobilenavbar = document.querySelector(".mobile-navbar");
// var nav = document.querySelector(".nav");

// window.onscroll = function() {
//     // if (window.scrollY > 300) {
//     //    document.querySelector('h1').style.color="red"
//     // }
// }

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navbarBg.style.backgroundColor = 'white'
        navbarBg.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.3)'
        // alert('hi')
    } else {
        navbarBg.style.backgroundColor = 'transparent'
        navbarBg.style.boxShadow = 'none'

        
   }
})


menuicon.onclick = function () {
    menuicon.style.display = 'none'
    cancelicon.style.display ='block'
    mobilenav.style.display = 'block'
}

cancelicon.onclick = function () {
    cancelicon.style.display = 'none'
    mobilenav.style.display = 'none'
    menuicon.style.display = 'block'
}



// document.body.addEventListener('', () => {
//     // if (body.scrollY > 100) {
//     //     alert("hello")
//     // }

//     alert('Hi')
// })

// window.addEventListener("scroll", function() {
//     if (window.scrollY > 50 ){
//         mobilenavbar.classList.add("nav")
//     }else {
//         mobilenavbar.classList.remove("nav")
//     }

// })