document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function EncontrarVocales(){
    texto = document.querySelector("#txtIngresar").value
    let contador = 0
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
            contador++;
        }
    }
    document.querySelector("#pResultado").innerHTML = contador
}