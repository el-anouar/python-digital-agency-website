// script.js

// Function to hide the loading screen
function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
}

// Array to keep track of loaded scripts
const scripts = document.querySelectorAll('script[defer]');
let loadedScripts = 0;
console.log(scripts)
// Increment counter when each script loads
scripts.forEach((script) => {
  script.addEventListener('load', () => {
    loadedScripts++;
    if (loadedScripts === scripts.length) {
      setTimeout(() => {
        hideLoadingScreen();
      },500)
      
    }
  });
});


const navMobile = document.querySelector(".navMobile");
const navMobileListHolder = navMobile.querySelector(".navMobileListHolder");
document.querySelector(".hamburger").addEventListener("click", function () {
  navMobile.style.display = "flex";
  navMobile.classList.remove("animateCloseNavMobile");

  navMobile.classList.add("animateOpenNavMobile");
  navMobileListHolder.classList.remove("animateCloseNavMobileHolder");
  navMobileListHolder.classList.add("animateOpenNavMobileHolder");
});

navMobile.addEventListener("click", function (e) {
  if (e.target.classList.contains("navMobile")) {
    navMobile.classList.remove("animateOpenNavMobile");
    navMobile.classList.add("animateCloseNavMobile");
    navMobileListHolder.classList.remove("animateOpenNavMobileHolder");
    navMobileListHolder.classList.add("animateCloseNavMobileHolder");
    navMobile.addEventListener("animationend", function (event) {
      if (event.animationName === "animateCloseNavMobile") {
        navMobile.style.display = "none";
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navMobileListItem a");

  // Function to set the active link based on current URL
  function setActiveLink() {
    const currentURL = "/"+window.location.pathname.split('/').pop();
    
    console.log("currentUrl",currentURL)
    navLinks.forEach((link) => {
      
      if (currentURL===link.getAttribute("href")) {
        console.log("currentURL.includes(link.getAttribute(href))",currentURL.includes(link.getAttribute("href")))
        console.log(link.getAttribute("href"))
        link.classList.add("active");
      } else {
        link.classList.remove("active");
        console.log("currentURL.includes(link.getAttribute(href))",currentURL.includes(link.getAttribute("href")))
        console.log(link.getAttribute("href"))
      }
    });
  }

  // Set the active link on page load
  setActiveLink();

});