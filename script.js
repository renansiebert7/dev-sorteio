    document.getElementById("drawButton").addEventListener("click", function() {
        // Obtém os valores dos inputs
        const minValue = parseInt(document.getElementById("minValue").value);
        const maxValue = parseInt(document.getElementById("maxValue").value);

        // Verifica se os valores são válidos
        if (isNaN(minValue) || isNaN(maxValue) || minValue >= maxValue) {
            alert("Por favor, insira valores válidos.");
            return;
        }

        // Gera um número aleatório entre minValue e maxValue
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

        // Exibe o resultado
        alert("Número sorteado: " + randomNumber);
    });