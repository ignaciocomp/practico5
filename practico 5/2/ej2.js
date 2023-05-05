document.querySelector("#btnCalcular").addEventListener("click", tomarValores)

function tomarValores(){
    textoCampo = document.querySelector("#txtIngresar").value
    letra = document.querySelector("#txtIngresarLetra").value
    EncontrarLetra()
}

function EncontrarLetra(){
    let contador = 0
    for (let i = 0; i < textoCampo.length; i++) {
        if (textoCampo[i] === letra) {
        contador++;
        }
    }
    document.querySelector("#pResultado").innerHTML = contador
}