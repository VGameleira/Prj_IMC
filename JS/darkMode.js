
// Alterna o modo escuro
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

window.addEventListener("DOMContentLoaded", () => {
  const darkModeAtivado = localStorage.getItem("darkMode") === "true";
  if (darkModeAtivado) {
    document.body.classList.add("dark-mode");
  }

  const botao = document.getElementById("toggleDarkMode");
  if (botao) {
    botao.addEventListener("click", toggleDarkMode);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("icon");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Animação do ícone
    icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
});

// Dark mode Infantil.html
document.addEventListener('DOMContentLoaded', function () {

  const toggleBtn = document.getElementById('modoDark');

  const body = document.body;



  // Aplica o modo salvo no localStorage

  if (localStorage.getItem('modoEscuro') === 'true') {

    body.classList.add('dark-mode');

  }



  toggleBtn.addEventListener('click', () => {

    body.classList.toggle('dark-mode');

    localStorage.setItem('modoEscuro', body.classList.contains('dark-mode'));

  });

});


