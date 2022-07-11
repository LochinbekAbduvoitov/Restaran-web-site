"use strict"

// Navbar toggle

const navbar=document.querySelector("[data-navbar]");
const navbarLinks=document.querySelectorAll("[data-nav-link]");
const menuToggleBtn=document.querySelector("[data-menu-toggle-btn]")

menuToggleBtn.addEventListener("click",()=>{
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
});

for(let i=0; i<navbarLinks.length; i++){
    navbarLinks[i].addEventListener("click",()=>{
        navbar.classList.toggle("active");
        menuToggleBtn.classList.toggle("active");
    })
}

// Header

const header=document.querySelector("[data-header]");

window.addEventListener("scroll",()=>{
    if(window.scrollY >= 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active")
    }
})




// Search box toggle

// const searchBtn=document.querySelector("[data-search-btn]");
// const searchContainer=document.querySelector("[data-search-container]");
// const searchSubmitBtn=document.querySelector("[data-search-submit-btn]");
// const searchCloseBtn=document.querySelector("[data-search-close-btn]");

// const searchBoxElems=[searchBtn,searchSubmitBtn,searchCloseBtn];

// for(let i=0; i < searchBoxElems.length; i++){
//     searchBoxElems[i].addEventListener("click",()=>{
//         searchContainer.classList.toggle("active");
//         document.body.classList.toggle("active");
//     })
// }