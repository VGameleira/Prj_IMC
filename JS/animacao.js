function animarResultado(elemento) {
  elemento.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
  elemento.style.transform = 'scale(1.1)';
  elemento.style.opacity = '0.8';
  setTimeout(() => {
    elemento.style.transform = 'scale(1)';
    elemento.style.opacity = '1';
  }, 400);
}
