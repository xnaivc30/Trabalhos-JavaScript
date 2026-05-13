function caixinha1(){
    let oxi1 = document.getElementById("input1").value;
        if (oxi1 == "") {
            document.getElementById("p1").textContent = "... Aguardando a idade ...";
        }
        else if (oxi1 < 0 ){
            document.getElementById("p1").textContent = "... Aguardando a idade ...";
        }
        else if (oxi1 < 12){
            document.getElementById("p1").textContent = "Astíanax";
        }
        else if (oxi1 >= 12 && oxi1 <= 17){
            document.getElementById("p1").textContent = "Telêmaco";
        }
        else if (oxi1 >= 18 && oxi1 <= 59){
            document.getElementById("p1").textContent = "Odisseu";
        }
        else if (oxi1 >= 60){
            document.getElementById("p1").textContent = "Anticléia";
        } 
}

function caixinha2(){
    let oxi2 = document.getElementById("input2").value;
    let oxi3 = document.getElementById("input3").value;
        if (oxi2 == "Odisseu" && oxi3 == "penelope123"){
            alert ("Bem vindo, Odisseu")
        }
        else if (oxi2 == "Ninguém" && oxi3 == "vinho"){
            alert ("Modo anônimo ativado")
        }
        else if (oxi2 == "" || oxi3 == ""){
            alert ("Preencha todos os campos")
        }
        else{
            alert ("Usuário ou senha incorretos")
        }
}

function caixinha3(){
    let oxi4 = document.getElementById("input4").value;
    let radio1 = document.getElementById("input5").checked;
    let radio2 = document.getElementById("input6").checked;
    let radio3 = document.getElementById("input7").checked;
    let radio4 = document.getElementById("input8").checked;
        if (oxi4 >= 500 && radio1 == true && radio2 == false){
            document.getElementById("h3_desconto").textContent = oxi4 * 0.20;
        }
        else if (oxi4 >= 300 && radio3 == true && radio4 == false){
            document.getElementById("h3_desconto").textContent = oxi4 * 0.10;
        }
        else if (oxi4 < 300 && radio3 == false && radio4 == true){
            document.getElementById("h3_desconto").textContent = "Desconto nenhum oxi"
        }
        else {
            document.getElementById("h3_desconto").textContent = "Deu erro ae oh"
        }
}