let player = document.querySelector("img#player")
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function jumpAct() {
    player.style.animation = "player-up 0.2s both"
    sleep(500).then(() => {  player.style.animation = "player-down 0.2s both"; });
    
}

async function mov() {
    
    let cont = 0
    for (let jump = false; !jump; jump=false) {
        player.src = `images/p${cont+1}.png`
        await sleep(80)
        if (cont >= 5){
            cont = 0
        } else {
            cont++
        }
        
        
    }
}

mov()

window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var space = codigoTecla == 32;
    if (space) jumpAct();
});