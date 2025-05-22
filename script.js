    // let peso = Number.parseFloat(prompt('Digite um Peso:'));
    //     let altura = Number.parseFloat(prompt('Digite a sua altura:'));
    //     let imc = peso / (altura * altura);

    //     alert(`O IMC é igual: ${imc.toFixed(2)} kg/m²`);



    //     if (imc < 18.5) { // Abaixo do peso
    //         alert('Você está abaixo do peso');
    //     } else if (imc >= 18.5 && imc < 25) { // Peso normal
    //         alert('Você está no peso ideal');
    //     } else if (imc >= 25 && imc < 30) { // Sobrepeso
    //         alert('Você está com sobrepeso');
    //     } else if (imc >= 30 && imc < 35) { // Obesidade grau 1
    //         alert('Você está com obesidade grau 1');
    //     } else if (imc >= 35 && imc < 40) { // Obesidade grau 2
    //         alert('Você está com obesidade grau 2');
    //     } else { // Obesidade grau 3
    //         alert('Você está com obesidade grau 3');

    //     }

    function CalcularIMC() {
        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);
        const resultado = document.getElementById("resultadoIMC");
    
        if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
            resultado.textContent = "Preencha os campos corretamente";

            resultado.style.color = "red";

            return;
        }

        const imc = peso / (altura * altura);
        let classificacao = "";
        
        if (imc < 18.5){
            classificacao = "Você está abaixo do peso";
        }else if (imc < 25){
            classificacao = "Você está peso ideal";
        }else if (imc < 30) {
           classificacao = "Você está com sobrepeso";
        }else if  (imc < 35){
           classificacao = "Você está obesidade grau 1";
        }else if (imc < 40) {
           classificacao = "Você está obesidade grau 2";
        }else {
           classificacao = "Você está obesidade grau 3";
        }

        resultado.innerHTML = `Seu IMC é <strog>${imc.toFixed(2)} </strog> kg/m². <br>${classificacao}`;
        resultado.style.color = "green"
    }