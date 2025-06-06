// window.addEventListener("scroll", function () {
//     let header = document.querySelector(".sub_header");
//     let scrollTop = window.scrollY;

//     if (scrollTop > 0) {
//         header.style.position = "fixed";
//         header.style.top = "0";
//         header.style.width = "100%";
//         header.style.backgroundColor = "#fff"; -- Optional: Maintain background
//         header.style.zIndex = "1000"; -- Keeps it above other elements
//     } else {
//         header.style.position = "relative"; -- Resets when at top
//     }
// });
// window.addEventListener("scroll", function () {
//     let header = document.querySelector(".sub_header");
//     let navbar = document.querySelector(".hero-section");

//     let navbarHeight = navbar.offsetHeight; -- Get navbar's height

//     if (window.scrollY >= navbarHeight) {
//         header.style.position = "fixed";
//         header.style.top = "0"; 
//         header.style.width = "100%";
//         header.style.backgroundColor = "#fff"; 
//         header.style.zIndex = "1000"; 
//         header.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)"; // Optional: Adds a shadow effect
//     } else {
//         header.style.position = "relative"; 
//         header.style.boxShadow = "none"; 
//     }
// });


