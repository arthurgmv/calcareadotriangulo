var alturaInput = document.getElementById('altura');
    var baseInput = document.getElementById('base');
    var calcularBtn = document.querySelector('input[type="button"]');
    var resultado = document.createElement('p');

    function calcularArea() {
        var altura = parseFloat(alturaInput.value);
        var base = parseFloat(baseInput.value);
        var area = (base * altura) / 2;
      
        resultado.textContent = `A área do triângulo é ${area}.`
    }
    calcularBtn.addEventListener('click', calcularArea);
    document.body.appendChild(resultado);