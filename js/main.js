// ----- Mobile menu toggle -----
// Find the hamburger button and the list of nav links in the HTML.
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

// When the button is clicked, show or hide the menu.
navToggle.addEventListener("click", function () {
  // classList.toggle adds "open" if it's missing and removes it if it's there.
  // It returns true when the class was added, meaning the menu is now open.
  const isOpen = navLinks.classList.toggle("open");

  // Keep aria-expanded in sync so screen readers know the menu's state.
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after a link is clicked, so it doesn't cover the section on phones.
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ----- Footer year -----
// Put the current year in the footer so it updates automatically.
document.querySelector("#year").textContent = new Date().getFullYear();
