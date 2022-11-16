let playersMokeponButton = document.getElementById('players-mokepon-button')
playersMokeponButton.addEventListener('click', selectPlayersMokepon)

const $ = chooser => document.getElementById(chooser)

    let inputHipodoge = $('hipodoge')
    let inputCapipepo = $('capipepo')
    let inputRatigueya = $('ratigueya')
    let inputLangostelvis = $('langostelvis')
    let inputTucapalma = $('tucapalma')
    let inputPydos = $('pydos')
    let spanPlayersMokepon = $('players-mokepon')
    let spanEnemysMokepon = $('enemys-mokepon')

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function selectPlayersMokepon() {
    if (inputHipodoge.checked) {
        spanPlayersMokepon.innerHTML = 'Hipodoge'
    } 
    else if (inputCapipepo.checked) {
        spanPlayersMokepon.innerHTML = 'Capipepo'
    }
    else if (inputRatigueya.checked) {
        spanPlayersMokepon.innerHTML = 'Ratigueya'
    }
    else if (inputLangostelvis.checked) {
        spanPlayersMokepon.innerHTML = 'Langostelvis'
    }
    else if (inputTucapalma.checked) {
        spanPlayersMokepon.innerHTML = 'Tucapalma'
    }
    else if (inputPydos.checked) {
        spanPlayersMokepon.innerHTML = 'Pydos'
    }
    else {
        alert('Please select a Mokepon')
    }

    selectEnemysMokepon()
}

function selectEnemysMokepon(){
    let randomEnemy = random(1, 6)

    if (randomEnemy == 1) {
        spanEnemysMokepon.innerHTML = 'Hipodoge'
    }
    else if (randomEnemy == 2) {
        spanEnemysMokepon.innerHTML = 'Capipepo'
    }
    else if (randomEnemy == 3) {
        spanEnemysMokepon.innerHTML = 'Ratigueya'
    }
    else if (randomEnemy == 4) {
        spanEnemysMokepon.innerHTML = 'Langostelvis'
    }
    else if (randomEnemy == 5) {
        spanEnemysMokepon.innerHTML = 'Tucapalma'
    }
    else if (randomEnemy == 6) {
        spanEnemysMokepon.innerHTML = 'Pydos'
    }
}