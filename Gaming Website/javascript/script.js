// Headre Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 100) {
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
    }
}

// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a) {
    a.addEventListener("click", function () {
        nav.navCollapse.classList.remove("show");
    })
})