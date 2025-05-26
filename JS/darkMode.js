
// Alterna o modo escuro
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Ativa o modo escuro automaticamente se salvo
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

