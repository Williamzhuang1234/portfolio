// Mobile menu toggle.
// On phones the nav links are hidden (see .site-nav in style.css).
// Clicking the "Menu" button shows or hides them.

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

menuButton.addEventListener("click", function () {
  // aria-expanded tells screen readers whether the menu is open.
  // Its value is the text "true" or "false", so we compare strings.
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open");
});
