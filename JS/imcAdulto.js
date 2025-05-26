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
  resultado.style.color = "black";
  mensagem.textContent = dica;
  dicas.style.display = "block";

  animarResultado(resultado);
}
