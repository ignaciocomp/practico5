document.querySelector("#btnCalcular").addEventListener("click", tomarValores)

function tomarValores(){
    let textoCampo = document.querySelector("#txtIngresar").value
    let inviertido = InvertirTexto(textoCampo)
    document.querySelector("#pResultado").innerHTML = inviertido;
}

function InvertirTexto(texto){
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto.charAt(i);
    }
    return textoInvertido;
}