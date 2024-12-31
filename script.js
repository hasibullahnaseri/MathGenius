function solve() {
    const expression = document.getElementById('expression').value;
    try {
        const result = math.evaluate(expression);
        document.getElementById('result').textContent = `Resultado: ${result}`;

        // Datos para el gráfico (ejemplo simple)
        const data = {
            labels: ['Resultado'],
            datasets: [{
                label: 'Valores',
                data: [result],
                backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        };

        // Configuración del gráfico
        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Renderiza el gráfico
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    } catch (error) {
        document.getElementById('result').textContent = 'Error en la expresión';
    }
}
