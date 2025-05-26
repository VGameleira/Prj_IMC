
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('modoEscuro', document.body.classList.contains('dark-mode'));
}

// Ativar modo escuro salvo
window.onload = function () {
  if (localStorage.getItem('modoEscuro') === 'true') {
    document.body.classList.add('dark-mode');
  }
};

function animarResultado(elemento) {
  elemento.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
  elemento.style.transform = 'scale(1.1)';
  elemento.style.opacity = '0.8';
  setTimeout(() => {
    elemento.style.transform = 'scale(1)';
    elemento.style.opacity = '1';
  }, 400);
}

function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultadoIMC");
  const dicas = document.getElementById("dicasSaude");
  const mensagem = document.getElementById("mensagemSaude");

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.textContent = "Preencha os campos corretamente.";
    resultado.style.color = "red";
    dicas.style.display = "none";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";
  let dica = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
    dica = "Consuma alimentos mais calóricos e procure orientação médica.";
  } else if (imc < 25) {
    classificacao = "Peso ideal";
    dica = "Continue mantendo hábitos saudáveis!";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
    dica = "Reduza o consumo de alimentos processados e pratique atividade física.";
  } else if (imc < 35) {
    classificacao = "Obesidade grau 1";
    dica = "Busque apoio nutricional e pratique exercícios regularmente.";
  } else if (imc < 40) {
    classificacao = "Obesidade grau 2";
    dica = "Atenção! Consulte um profissional de saúde o quanto antes.";
  } else {
    classificacao = "Obesidade grau 3";
    dica = "Risco elevado! Procure tratamento médico especializado urgentemente.";
  }

  resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> kg/m².<br>Classificação: <strong>${classificacao}</strong>`;



  mensagem.textContent = dica;
  dicas.style.display = "block";

  animarResultado(resultado);
}

function calcularIMCInfantil() {
  const peso = parseFloat(document.getElementById("pesoInfantil").value);
  const altura = parseFloat(document.getElementById("alturaInfantil").value);
  const idade = parseInt(document.getElementById("idade").value);
  const sexo = document.getElementById("sexo").value;
  const resultado = document.getElementById("resultadoIMCInfantil");
  const dicas = document.getElementById("dicasSaudeInfantil");
  const mensagem = document.getElementById("mensagemSaudeInfantil");

  if (isNaN(peso) || isNaN(altura) || isNaN(idade) || peso <= 0 || altura <= 0 || idade < 6 || idade > 15) {
    resultado.textContent = "Preencha todos os campos corretamente. Idade deve estar entre 6 e 15 anos.";
    resultado.style.color = "red";
    dicas.style.display = "none";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";
  let dica = "";

  const tabelaMeninos = {
    6: [14.5, 16.6, 18.0],
    7: [15, 17.3, 19.1],
    8: [15.6, 16.7, 20.3],
    9: [16.1, 18.8, 21.4],
    10: [16.7, 19.6, 22.5],
    11: [17.2, 20.3, 23.7],
    12: [17.8, 21.1, 24.8],
    13: [18.5, 21.9, 25.9],
    14: [19.2, 22.7, 26.9],
    15: [19.9, 23.6, 27.7],
  };

  const tabelaMeninas = {
    6: [14.3, 16.1, 17.4],
    7: [14.9, 17.1, 18.9],
    8: [15.6, 18.1, 20.3],
    9: [16.3, 19.1, 21.7],
    10: [17, 20.1, 23.2],
    11: [17.6, 21.1, 24.5],
    12: [18.3, 22.1, 25.9],
    13: [18.9, 23.0, 27.7],
    14: [19.3, 23.8, 27.9],
    15: [19.6, 24.2, 28.8],
  };

  const referencia = sexo === "masculino" ? tabelaMeninos[idade] : tabelaMeninas[idade];
  if (imc <= referencia[0]) {
    classificacao = "Abaixo do peso";
    dica = "Atenção! Busque orientação nutricional e pediátrica.";
  } else if (imc <= referencia[1]) {
    classificacao = "Peso normal";
    dica = "Mantenha hábitos saudáveis e incentive atividade física.";
  } else if (imc <= referencia[2]) {
    classificacao = "Sobrepeso";
    dica = "Evite alimentos ultraprocessados e incentive brincadeiras ativas.";
  } else {
    classificacao = "Obesidade";
    dica = "Procure orientação médica e nutricional com urgência.";
  }

  resultado.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong> kg/m²<br>Classificação: <strong>${classificacao}</strong>`;
  resultado.style.color = "black";
  mensagem.textContent = dica;
  dicas.style.display = "block";

  animarResultado(resultado);
}


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

