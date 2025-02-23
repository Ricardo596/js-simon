let numeriCasuali = [];
let timerCountdown;

function avviaGioco() {
    numeriCasuali = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1);
    document.getElementById('numbers-list').innerHTML = numeriCasuali.join(', ');
}