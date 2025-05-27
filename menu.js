// MENÚ
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");
  const links = nav.querySelectorAll("a");

  // Toggle menu al hacer clic en el botón
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Oculta el menú al hacer clic en cualquier enlace
  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
});