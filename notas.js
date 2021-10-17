let atv1Input = document.getElementById("atv1")
let atv2Input = document.getElementById("atv2")
let atv3Input = document.getElementById("atv3")
let atv4Input = document.getElementById("atv4")
let atv5Input = document.getElementById("atv5")

let n1Input = document.getElementById("n1")
let n2Input = document.getElementById("n2")
let n3Input = document.getElementById("n3")
let n4Input = document.getElementById("n4")
let n5Input = document.getElementById("n5")

let p1Input = document.getElementById("p1")
let p2Input = document.getElementById("p2")
let p3Input = document.getElementById("p3")
let p4Input = document.getElementById("p4")
let p5Input = document.getElementById("p5")

let mediaInput = document.getElementById("media")
let resultado = document.getElementById("resultado")


function TemVazio() {

    for (i = 0; i < 5; i++) {
        
        if (listaAtv[i] === "" || listaNotas[i] === "" || listaPesos[i] === "") {
            alert("Favor preencher todos os campos")
            return true
        }
    }
    return false
}

function TemInputInvalido() {

    for (i = 0; i < 5; i++) {
        if (Number(listaNotas[i]) > 10 || Number(listaNotas[i]) < 0) {
            alert("Favor inserir uma nota de 0 a 10")
            return true
        }

        if (Number(listaPesos[i]) < 1 || Number(listaPesos[i]) > 5 || !Number.isInteger(Number(listaPesos[i]))) {
            alert("Favor inserir um peso inteiro de 1 a 5")
            return true
        }
    }
    return false
}


function CalculaMedia() {
    let somaPesos = 0
    let somaNotas = 0
    listaAtv = [atv1Input.value, atv2Input.value, atv3Input.value, atv4Input.value, atv5Input.value]
    listaNotas = [n1Input.value, n2Input.value, n3Input.value, n4Input.value, n5Input.value]
    listaPesos = [p1Input.value, p2Input.value, p3Input.value, p4Input.value, p5Input.value]
    
    if (TemVazio() || TemInputInvalido()) {
        return
    }    
    
    listaNotas = listaNotas.map(Number)
    listaPesos = listaPesos.map(Number)

    for (i = 0; i < 5; i++) {
        listaNotas[i] = listaNotas[i] * listaPesos[i]
        somaPesos += listaPesos[i]
    }

    for (i = 0; i < 5; i++) { somaNotas += listaNotas[i]  }
    
    media = (somaNotas / somaPesos).toFixed(2)
    mediaInput.value = media

    if (media >= 7) {4
        resultado.value = "Aprovado"
        document.getElementById("resultado").style.color = "rgb(71, 161, 43)";
    } else if (media < 5) {
        resultado.value = "Reprovado"
        document.getElementById("resultado").style.color = "red";
    } else {
        resultado.value = "Recuperação"
        document.getElementById("resultado").style.color = "blue";
    }

}


function LimpaDados() {
    listaAtv = [atv1Input, atv2Input, atv3Input, atv4Input, atv5Input]
    listaNotas = [n1Input, n2Input, n3Input, n4Input, n5Input]
    listaPesos = [p1Input, p2Input, p3Input, p4Input, p5Input]

    for (i = 0; i < 5; i++){
        listaAtv[i].value = ""
        listaNotas[i].value = ""
        listaPesos[i].value = ""
    }
    mediaInput.value = ""
    resultado.value = ""

  }

