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
            document.getElementById("div1").textContent = "EU SER O SONIC MUEHEHEHEHEHEHEH";
            document.getElementById("div1").style.color = "#ffffff";
        }
        else {
            document.getElementById("div1").textContent = "nao mano, nao é essa";
        }
}

function caixinha6 (){
    let oxi6 = Number (document.getElementById("input6").value);
        if (oxi6 > 540 && oxi6 < 600) {
            alert("Isso mesmo!");
        }
        else {
            alert ("Nop, tenta de novo");
        }
}

function caixinha7 (){
    let oxi7 = Number (document.getElementById("input7").value);
        if (oxi7 < 50 && oxi7 > 30){
            alert("Isso mesmo!");
        }
        else {
            alert("Vixe... Tenta de novo! :D");
        }
}

function caixinha8 (){
    let oxi8 = document.getElementById("input8").value;
        if (oxi8 == "Ruthlessness"){
            document.getElementById("p3").textContent = "Você acertou, parabéns!";
        }
        else {
            document.getElementById("p3").textContent = "Você errou. Tente de novo.";
        }
            
}

function caixinha9 (){
    let oxi9 = document.getElementById("input9").value;
        if (oxi9 == "escuro"){
            document.body.style.backgroundColor = "#aaaaaa"
        }
}

function caixinha10 (){
    let oxi10 = document.getElementById("input10").value;
        if (oxi10 == "EPIC"){
            document.getElementById("p4").style.color = "#65386d";
            document.getElementById("p4").style.fontSize = "30px";
        }
    document.getElementById("p4").textContent = "ce acho o easter egg???";
}

function caixinha11( ) {
    let oxi11 = document.getElementById("input11").value;
        if (oxi11 == "ok") {
            document.body.style.backgroundColor = "#d8d8d8";
            document.body.style.fontSize = "25px"
        }
        else {
            alert("oxi, nao, tenta d novo");
        }
}

function caixinha12( ){
    let oxi12 = Number (document.getElementById("input12").value);
        if (oxi12 > 20) {
            document.getElementById("p5").style.fontSize = "80px"
            document.getElementById("p5").textContent = "nem tanto ne"
        }
        else {
            document.getElementById("p5").textContent = "numero maior ne pae"
            document.getElementById("p5").style.fontSize = "10px"
        }
}

function caixinha13 (){
    let oxi13 = document.getElementById("input13").value;
        if (oxi13 == "admin") {
            alert("Bem vindo!")
        }
}

function caixinha14( ){
    let oxi14 = document.getElementById("input14").value;
        if (oxi14 == "avuhc"){
            document.getElementById("p6").textContent = "EBAAAA, ACERTOOOOOU";
            document.getElementById("p6").style.color = "#76517c";
            document.getElementById("p6").style.fontSize = "50px";
        }
        else {
            document.getElementById("p6").textContent = "nao acertou, tenta pensar de tras pra frente";
        }
}

function caixinha15(){
    let oxi15 = document.getElementById("input15").value;
        if (oxi15 == "Tirésias"){
            document.body.style.fontSize = "1px"
            document.body.style.color = "#000000"
            document.body.style.backgroundColor = "#000000"
        }
}

function caixinha16(){
    let oxi16 = Number(document.getElementById("input16").value);
        if (oxi16 > 100){
            document.body.style.backgroundColor = "#dadada";
        }
}

function caixinha17 (){
    let oxi17 = document.getElementById("input17").value;
        if (oxi17 == "copiar"){
            document.getElementById("p7").textContent = "copiar"
        }
}

function caixinha18 (){
    let oxi18 = document.getElementById("input18").value;
        if (oxi18 == "Odisseu"){
            document.getElementById("div2").textContent = "i lost my best friend, i lost my mentor, my mom, five hundred men gone, this can't go on!"
            document.getElementById("div3").textContent = "i must get to see Penelope and Telemachus, so if we must sail through dangerous oceans and beaches... (mt grande, vo bota tudo nao)"
        }
}

function caixinha19(){
    let oxi19 = Number (document.getElementById("input19").value);
        if (oxi19 == 67){
            document.body.style.fontSize = "30px";
            document.body.textContent = "67 aura + ego";
            document.body.style.color = "#ff0000";
        }
}