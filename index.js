document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.querySelector(".nav-button");
  const nav = document.querySelector(".nav");
  const mainSection = document.querySelector(".main-section");

  navButton.addEventListener("click", () => {
    nav.classList.toggle("active");
    mainSection.classList.toggle("hide");
  });
});
