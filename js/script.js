var jogador = 'x';
var jogada = 0;
var cpu;
function chkJogo(id) {
    cpu = document.getElementById("cpu").checked;
    

    src = chkSrc(id);
    if (src == "branco.png") {

        document.getElementById(id).src = "img/" + jogador + ".png";
        jogada++;

        if (chkVitoria()) {
            alert("Fim do Jogo! Vitoria do " + jogador);
            location.reload();
            return;
        }
        if(jogada >= 9){
            alert("Fim do Jogo! Empate!");
            location.reload();
            jogada = 0;

        }

        if (jogador == 'x')
            jogador = 'o';
        else
            jogador = 'x';
    }

    if(cpu && jogador == 'o'){
        chkJogo(jogadaCpu());
        
    }
}


function chkSrc(id) {
    var src = document.getElementById(id).src;
    return src.substring(src.length - 10, src.length);
}

function chkVitoria() {

    if (chkSrc('cel1') == chkSrc('cel2') && chkSrc('cel1') == chkSrc('cel3') && chkSrc('cel1') != 'branco.png' ||
        chkSrc('cel4') == chkSrc('cel5') && chkSrc('cel4') == chkSrc('cel6') && chkSrc('cel4') != 'branco.png' ||
        chkSrc('cel7') == chkSrc('cel8') && chkSrc('cel7') == chkSrc('cel9') && chkSrc('cel7') != 'branco.png' ||
        chkSrc('cel1') == chkSrc('cel4') && chkSrc('cel1') == chkSrc('cel7') && chkSrc('cel1') != 'branco.png' ||
        chkSrc('cel2') == chkSrc('cel5') && chkSrc('cel2') == chkSrc('cel8') && chkSrc('cel2') != 'branco.png' ||
        chkSrc('cel3') == chkSrc('cel6') && chkSrc('cel3') == chkSrc('cel9') && chkSrc('cel3') != 'branco.png' ||
        chkSrc('cel1') == chkSrc('cel5') && chkSrc('cel1') == chkSrc('cel9') && chkSrc('cel1') != 'branco.png' ||
        chkSrc('cel3') == chkSrc('cel5') && chkSrc('cel3') == chkSrc('cel7') && chkSrc('cel3') != 'branco.png'
    )
        return true;

}

function jogadaCpu(){
    return 'cel'+ Math.floor((Math.random() * 9) + 1);
}