// Referenciando os elementos da DOM
let divContainerElement = document.querySelector('.container');
let divElementMap = document.querySelector('.map');
let btnMenuElement = document.querySelector('button[id=btn-menu]');
let divElementCodCabinets = document.querySelector('.cod-cabinets');

// Criando elementos na DOM
let divElement = document.createElement('div');
let btnElementClose = document.createElement('button');


// Setando atributos para os elementos criados
divElement.setAttribute('class', 'map');
btnElementClose.setAttribute('class', 'btn-menu');






// Cha      ma a função que renderiza a div map
btnMenuElement.onclick = reder;



// função que renderiza a div map
// TODO Essa função não está terminada
function reder() {
    divElementMap.style.display = "grid";
    divElementMap.style.visibility = "visible";
}

function functionB1() {
    divElementCodCabinets.style.display = "flex";
    divElementCodCabinets.style.visibility = "visible";
}