document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function EncontrarVocales(){
    texto = document.querySelector("#txtIngresar").value
    letra = document.querySelector("#txtIngresarSub").value
    let nuevoTexto = "";
    for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) === letra) {
    nuevoTexto += "*";
    } else {
    nuevoTexto += texto.charAt(i);
    }
}
document.querySelector("#pResultado").innerHTML = nuevoTexto;
}