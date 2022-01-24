const refranes = [
    "AL QUE MADRUGA DIOS LE AYUDA",
    "VAS A CAER CHUPETIN CTM",
    "EN TIEMPOS DE GUERRA, CUALQUIER HUECO ES TRINCHERA",
    "HERACLES ES MI PASTOR Y NADA ME FALTARA"
]

let refran;
let numero = 0;
let refranO;
let enejecucion =true;

const elegirR = () =>{
    const pos = Math.round(Math.random()*(refranes.length-1))
    return refranes[pos]
}

const ocultaR =(refran)=>{
    let refranO = "";
    for(let c of refran){
        if(c != " "){
            refranO += "_"
        }
        else{
            refranO += c
        }
    }
    return refranO
}

const cargarR = (refranO) =>{
    const divRefran = document.getElementById("zona_refran")
    divRefran.innerText = refranO
}

const buscarL = (letra,refran,refranO) =>{
    let nuevoRo = ""
    for(let i=0; i<refran.length;i++){
        if(refran[i]==letra){
            nuevoRo +=letra
        }else{
            nuevoRo += refranO[i]
        }
    }
    return nuevoRo
}

const cargarImg = (num) =>{
    const ruta = `/img/Hangman-${num}.png`
    document.getElementById("img").setAttribute("src",ruta)
}

const cargarMensajeF = (val) =>{
    if(val){
        document.getElementById("win").setAttribute("class","alert alert-success")
    }else{
        document.getElementById("lose").setAttribute("class","alert alert-danger")
    }
}

const letraInputOnKeyPress = (event) =>{
    if (enejecucion) {
        const letra = event.key.toUpperCase()
        const nuevoRo = buscarL(letra, refran, refranO)
        if (nuevoRo == refranO) {
            //eres gil
            numero += 1
            if (numero < 7) {
                cargarImg(numero)
            } else {
                cargarMensajeF(false)
                enejecucion = false
            }
        } else {
            //vas bien mi pana
            refranO = nuevoRo
            if (refran == refranO) {
                cargarMensajeF(true)
                enejecucion = false
            }
        }
        cargarR(refranO)
    }
}

const main = () =>{
    //1. mostrar refran de forma aleatoria
    refran= elegirR();
    //2.ocultar refran ----- uwu-----
    refranO= ocultaR(refran)
    //3.mostrar refran oculto
    cargarR(refranO)
    //4.configurar evento keypress
    document.getElementById("inptxt").addEventListener("keypress",letraInputOnKeyPress)
}

window.addEventListener("load",main)