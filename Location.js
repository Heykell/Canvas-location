// Añade escuchadores de eventos para mousedown y mouseup
document.addEventListener('mousedown', logMousePosition);
document.addEventListener('mouseup', logMousePosition);

function logMousePosition(event) {
    // Verifica si el evento es dentro del canvas
    const canvas = document.querySelector('canvas');
    if (canvas && event.target === canvas) {
        const rect = canvas.getBoundingClientRect();
        // Calcula el porcentaje de la posición del clic respecto al tamaño del canvas
        const xPercentage = ((event.clientX - rect.left) / rect.width) * 100;
        const yPercentage = ((event.clientY - rect.top) / rect.height) * 100;

        if (event.type === 'mousedown') {
            console.log('MouseDown - Porcentaje del Canvas:', { x: xPercentage, y: yPercentage });
        } else {
            console.log('MouseUp - Porcentaje del Canvas:', { x: xPercentage, y: yPercentage });
        }
    }
}

// Función para remover los escuchadores de eventos una vez que no se necesiten
function removeListeners() {
    document.removeEventListener('mousedown', logMousePosition);
    document.removeEventListener('mouseup', logMousePosition);
}

// Llamar a removeListeners() cuando ya no se necesite capturar más clics
