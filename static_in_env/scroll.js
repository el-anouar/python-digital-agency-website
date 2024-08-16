const container1 = document.querySelector(".svg-container");
document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    const navbarDesktopHolder = document.querySelector(".navbarDesktopHolder");
    const navDesktop1 = document.querySelector(".navDesktop1");
    const navDesktopLogo = document.querySelector(".navDesktopLogo");
    const navDesktop2 = document.querySelector(".navDesktop2");
  
    if (scrollPosition > 10) {
    } else {
    }

    if (
      scrollPosition >
      container1.offsetHeight -100
    ) {
        navbarDesktopHolder.classList.remove("notScrolled");
        navbarDesktopHolder.classList.add("scrolled");
        
        navDesktopLogo.classList.add("scrolled");
        navDesktop1.classList.add("scrolled");
        navDesktop2.classList.add("scrolled");


    } else {

      navbarDesktopHolder.classList.remove("scrolled");
      navbarDesktopHolder.classList.add("notScrolled");
      navDesktopLogo.classList.remove("scrolled");
      navDesktop1.classList.remove("scrolled");
      navDesktop2.classList.remove("scrolled");

    }
  
    const navMobileLogo = document.querySelector(".navMobileLogo");
    // Get its position relative to the viewport
    const rect = navMobileLogo.getBoundingClientRect();
  
    if (
      scrollPosition >
      container1.offsetHeight - navMobileLogo.offsetHeight - rect.top
    ) {
      navMobileLogo.classList.add("scrolled");
    } else {
      navMobileLogo.classList.remove("scrolled");
    }
    // Log the y-axis position
  });