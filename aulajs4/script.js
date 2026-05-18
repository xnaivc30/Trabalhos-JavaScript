let produtos = [];
let precos = [];
let posicao = 0;
let quantidade = 0;

function cadastrarProduto(){
    let nome = document.getElementById("input1").value;
    let preco = document.getElementById("input2").value;
        if (nome == "" || preco == "" ){
            document.getElementById("p1").textContent = "Adicione um valor válido";
            document.getElementById("p1").style.color = "#811313"
        }
        else{
            produtos.push(nome);
            precos.push(preco);
            document.getElementById("p1").textContent = "Produto e valor adicionados";
            document.getElementById("p1").style.color = "#208b29"
            quantidade = quantidade + 1;
            document.getElementById("p3").textContent = quantidade;
        }
}

function caixinha2(){
    let texto = document.getElementById("p2").textContent
        document.getElementById("p2").textContent = " " + texto + produtos[posicao] + " " + "-" + " " + "R$" + precos[posicao] + " " + "|";
        posicao = posicao + 1;
}
