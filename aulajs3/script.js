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