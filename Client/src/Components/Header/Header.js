const btnOpen = document.getElementById("openNav");
const navbar = document.getElementById("navbar-ul");

if (btnOpen) {
  btnOpen.addEventListener("click", () => {
    navbar.style.left = "0";
  });

  document.addEventListener("click", (event) => {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickInsideBtnOpen = btnOpen.contains(event.target);

    if (!isClickInsideNavbar && !isClickInsideBtnOpen) {
      navbar.style.left = "-320px"; // Change this value based on your design
    }
  });
}
