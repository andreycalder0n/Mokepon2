let playerMokeponButton = document.getElementById('player-mokepon-button')
playerMokeponButton.addEventListener('click', selectPlayerMokepon)

const $ = chooser => document.getElementById(chooser)

    let inputHipodoge = $('hipodoge')
    let inputCapipepo = $('capipepo')
    let inputRatigueya = $('ratigueya')
    let inputLangostelvis = $('langostelvis')
    let inputTucapalma = $('tucapalma')
    let inputPydos = $('pydos')

function selectPlayerMokepon() {
    if (inputHipodoge.checked) {
        alert('You selected Hipodoge')
    } 
    else if (inputCapipepo.checked) {
        alert('You selected Capipepo')
    }
    else if (inputRatigueya.checked) {
        alert('You selected Ratigueya')
    }
    else if (inputLangostelvis.checked) {
        alert('You selected Langostelvis')
    }
    else if (inputTucapalma.checked) {
        alert('You selected Tucapalma')
    }
    else if (inputPydos.checked) {
        alert('You selected Pydos')
    }
    else {
        alert('Please select a Mokepon')
    }
}