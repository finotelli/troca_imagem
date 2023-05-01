window.addEventListener("load", function() {
    var botao = document.getElementById("trocar-imagem");
    var imagem = document.getElementById("imagem-principal");
    var imagemAtual = 1;

    botao.addEventListener("click", function() {
        if (imagemAtual == 1) {
            imagem.src = "tenso.jpg";
            imagemAtual = 2;
        } 
        else {imagemAtual == 2 
            imagem.src = "normal.jpg";
            imagemAtual = 1;
        }
    });
});
