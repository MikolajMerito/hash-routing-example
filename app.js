// Proste trasy: hash -> HTML do wyświetlenia
const routes = {
  "/home": `
    <h2>Home</h2>
    <p>To jest strona główna.</p>
  `,
  "/about": `
    <h2>About</h2>
    <p>To jest strona „O nas”.</p>
  `,
  "/contact": `
    <h2>Contact</h2>
    <p>To jest strona kontaktowa.</p>
  `
};

// Funkcja renderująca odpowiednią stronę na podstawie hash
function renderRoute() {
  const outlet = document.getElementById("app");

  // Jeśli hash jest pusty, traktujemy to jak /home
  const hash = window.location.hash || "#/home";

  // Usuwamy znak #, zostaje np. "/home"
  const path = hash.slice(1);

  const page = routes[path];

  if (page) {
    outlet.innerHTML = page;
  } else {
    outlet.innerHTML = `
      <h2>404 – nie znaleziono nr albumu_Wasz</h2>
      <p>Nie ma takiej strony.</p>
    `;
  }
}

// Reaguj na zmianę hash w pasku adresu
window.addEventListener("hashchange", renderRoute);

// Pierwsze renderowanie po załadowaniu strony
window.addEventListener("DOMContentLoaded", renderRoute);
