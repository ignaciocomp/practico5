document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function EncontrarVocales(){
    texto = document.querySelector("#txtIngresar").value
    texto2 = document.querySelector("#txtIngresarSub").value
    if(texto.includes(texto2)){
        document.querySelector("#pResultado").innerHTML = "Include"
    } else{
        document.querySelector("#pResultado").innerHTML = "No Include"
    }
    
}