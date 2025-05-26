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
