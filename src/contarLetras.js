// contarLetras.js
function contarLetras(nombre) {
    const resultado = {};
    
    // Iterar sobre cada letra del nombre
    for (const letra of nombre) {
        // Si la letra ya está en el objeto resultado, incrementar el contador
        if (resultado[letra]) {
            resultado[letra]++;
        } else {
            // Si la letra no está en el objeto resultado, inicializar el contador en 1
            resultado[letra] = 1;
        }
    }
    
    return resultado;
}

export default contarLetras;
