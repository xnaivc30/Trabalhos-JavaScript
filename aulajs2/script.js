let nmr = 10;

if (nmr == 10) {
    alert("O número da variável é igual a 10");
}

let nome = "miranha - Nicole";

if (nome == "miranha - Nicole") {
    alert("Uou, o homem aranha se chama Nicole?!");
}

function caixinha1( ) {
    let oxi1 = document.getElementById("input1").value;
        if (oxi1 == "ok") {
            alert("ta certin");
        }
        else {
            alert("oxi, nao");
        }
}

function caixinha2( ) {
    let oxi2 = document.getElementById("input2").value;
        if (oxi2 == 5) {
            alert("uai, e num é q é?");
        }
        else {
            alert("KKKKKKKKKKK NÉ NÃO");
        }
}

function caixinha3( ){
    let oxi3 = document.getElementById("input3").value;
        if (oxi3 == "admin") {
            document.getElementById("p1").textContent = "será";
        }
        else {
            document.getElementById("p1").textContent = "não será";
        }
}

function caixinha4 ( ){
    let oxi4 = document.getElementById("input4").value;
        if (oxi4 == "teste") {
            document.getElementById("p2").textContent = "ééé... alguém..."
        }
        else{
            document.getElementById("p2").textContent = "que"
        }
}

function caixinha5 (){
    let oxi5 = document.getElementById("input5").value;
        if (oxi5 == "azul") {
            document.getElementById("div1").style.backgroundColor = "#1100ff";
            document.getElementById("div1").textContent = "EU SER O SONIC MUEHEHEHEHEHEHEH"
            document.getElementById("div1").style.color = "#ffffff"
        }
        else {
            document.getElementById("div1").textContent = "nao mano, nao é essa";
        }
}