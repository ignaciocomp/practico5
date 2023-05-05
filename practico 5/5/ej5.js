document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function EncontrarVocales(){
    texto = document.querySelector("#txtIngresar").value
    document.querySelector("#pResultado").innerHTML = texto.toUpperCase()
}