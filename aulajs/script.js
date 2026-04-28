let nome = "Nicole";

alert(nome);

let seven = 7;
let sixty = 60;
nmr = seven + sixty;
alert(nmr);

function caixinha ( ){
    alert("Hello, world! :D");
}

function caixinha2 ( ){
    let texto = document.getElementById("textinho");
    texto.textContent = "Mudoou! :D";
}

function caixinha3 ( ){
    let cor = document.getElementById("divinho");
    cor.style.backgroundColor = "black";
}

function caixinha4 ( ){
    let texto = document.getElementById("pnovo");
    texto.textContent = "Achooou!"
}

function caixinha5 ( ){
    let texto = document.getElementById("invisivel");
    texto.textContent = "";
    let botao = document.getElementById("btn5");
    botao.classList.add("botaosangue");
}

function caixinha6 ( ){
    let texto = document.getElementById("omg");
    let input = document.getElementById("input1");
    let escrito = texto.textContent;
    input.value = escrito;
}

function caixinha7 ( ){
    let input2 = Number(document.getElementById("input2").value);
    let input3 = Number(document.getElementById("input3").value);
    let result = input2 + input3 + 67;
    let local = document.getElementById("result");
    local.textContent = result;
}

function caixinha8 ( ){
    document.body.style.backgroundColor = "#000000";
}

function caixinha9 ( ){
    document.getElementById("nao").style.fontSize = "17px";
}

function caixinha10 ( ){
    document.getElementById("nao2").style.color = "#ff0000";
}

function caixinha11 ( ){
    document.getElementById("nao3").textContent = "I'm right here, mom, can't you see?";
    document.getElementById("nao4").textContent = "I'm waiting...... I took too long...";
}

function caixinha12 ( ){
    document.getElementById("nao5").textContent = "waiting...";
    document.getElementById("nao6").textContent = "waiting...";
    document.getElementById("nao7").textContent = "waiting... (bye mom)";
}

function caixinha13 ( ){
    document.getElementById("talvez1").textContent = "No.";
    document.getElementById("talvez1").style.color = "#ff0000";
    document.getElementById("talvez1").style.fontSize = "30px";
}

function caixinha14 ( ){
    let input4 = document.getElementById("input4");
    document.getElementById("talvez2").textContent = input4.value;
    document.getElementById("talvez3").textContent = input4.value;
}

function caixinha15 ( ){
    document.getElementById("talvez4").textContent = "DIE!!!";
}

function caixinha16 ( ){
    document.getElementById("talvez4").style.color = "#ff0000";
}

function caixinha17 ( ){
    document.getElementById("talvez4").style.fontSize = "30px";
}

function caixinha18 ( ){
    document.getElementById("sim1").textContent = "ooohh";
    document.getElementById("sim2").textContent = "oooohhhhh";
}

function caixinha19 ( ){
    let input5 = document.getElementById("input5");
    document.getElementById("talvez5").textContent = input5.value;
    document.getElementById("talvez5").style.color = "#0011ff";
}

function caixinha20 ( ){
    let input6 = Number(document.getElementById("input6").value);
    let input7 = Number(document.getElementById("input7").value);
    document.getElementById("talvez6").textContent = input6 + input7;
}

function caixinha21 ( ){
    document.getElementById("talvez6").textContent = "";
}

function caixinha22 ( ){
    document.body.style.fontSize = "1px";
    document.body.style.background = "#A47DAB"
    document.body.style.color = "#ffffff";
}