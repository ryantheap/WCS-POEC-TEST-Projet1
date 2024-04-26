const bouleJaune = document.getElementById("bouleJaune");
const bouleBleue = document.getElementById("bouleBleue");
const bouleViolette = document.getElementById("bouleViolette");
const bouleVerte = document.getElementById("bouleVerte");
const queueBillard = document.getElementById("queueBillard");


bouleJaune.addEventListener('click', () => {
    bouleJaune.style.animation = "animRotateYellow 2s ease 0s 1 normal forwards";
})
document.addEventListener('click', (element) => {
    if (element.target != bouleJaune) {
        bouleJaune.style.animation = "";
    }
});


bouleBleue.addEventListener('click', () => {
    bouleBleue.style.animation = "animRotateBlue 1s ease 0s 1 reverse forwards";
})
document.addEventListener('click', (element) => {
    if (element.target != bouleBleue) {
        bouleBleue.style.animation = "";
    }
});


bouleViolette.addEventListener('click', () => {
    bouleViolette.style.animation = "animPurple 2s ease 0s 1 normal forwards";
})
document.addEventListener('click', (element) => {
    if (element.target != bouleViolette) {
        bouleViolette.style.animation = "";
    }
});


bouleVerte.addEventListener('click', () => {
    bouleVerte.style.animation = "animGreen 2s ease 0s 1 normal forwards";
})
document.addEventListener('click', (element) => {
    if (element.target != bouleVerte) {
        bouleVerte.style.animation = "";
    }
});


queueBillard.addEventListener('click', () => {
    queueBillard.style.animation = "animQueue 2s ease 0s 1 normal forwards";
})
document.addEventListener('click', (element) => {
    if (element.target != queueBillard) {
        queueBillard.style.animation = "";
    }
});



