let produtos = [];
let precos = [];
let posicao = 0;

function caixinha1(){
    let nome = document.getElementById("input1").value;
    let preco = document.getElementById("input2").value;
        if (nome == "" || preco == ""){
            document.getElementById("p1").textContent = "Adicione um valor válido"
        }
        else{
            produtos.push(nome);
            precos.push(preco);
            document.getElementById("p1").textContent = "Produto e valor adicionados"
        }
}

function caixinha2(){
    let texto = document.getElementById("p2").textContent
        document.getElementById("p2").textContent = " " + texto + produtos[posicao] + " " + "-" + " " + "R$" + precos[posicao] + " " + "|";
        posicao = posicao + 1;
}