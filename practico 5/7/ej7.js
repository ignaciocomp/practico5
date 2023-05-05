document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function EncontrarVocales(){
    texto = document.querySelector("#txtIngresar").value
    palabras = texto.split(' ');
    cantidadPalabras = palabras.length;
    document.querySelector("#pResultado").innerHTML = cantidadPalabras
}