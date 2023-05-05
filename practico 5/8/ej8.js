document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function EncontrarVocales(){

    texto = document.querySelector("#txtIngresar").value
    primeraLetra = texto.charAt(0)
    ultimaLetra = texto.charAt(texto.length - 1)
    if (primeraLetra === ultimaLetra) {
        document.querySelector("#pResultado").innerHTML = 'Empieza y Termina con la misma letra'
    } else {
        document.querySelector("#pResultado").innerHTML = 'NO Empieza y Termina con la misma letra'
    }
}