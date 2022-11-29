let trafficLightEl = document.querySelector('#trafficLight');
let trafficLightEl2 = document.querySelector('#trafficLight2');
let trafficLightEl3 = document.querySelector('#trafficLight3');
let clicks = 0;

function makeGreen() {
    trafficLightEl.style.background = 'green';
    trafficLightEl2.style.background = '';
    trafficLightEl3.style.background = '';
    clicks += 1;
}

function makeYellow() {
    trafficLightEl2.style.background = 'yellow';
    trafficLightEl.style.background = '';
    trafficLightEl3.style.background = '';
    clicks += 1;
}

function makeRed() {
    trafficLightEl3.style.background = 'red';
    trafficLightEl.style.background = '';
    trafficLightEl2.style.background = '';
    clicks = 0;
}

function cyclically() {
    switch (clicks) {
        case 0: makeGreen();
            break;
        case 1: makeYellow();
            break;
        case 2: makeRed();
            break;
    }
}

trafficLightEl.addEventListener('click', cyclically);
trafficLightEl2.addEventListener('click', cyclically);
trafficLightEl3.addEventListener('click', cyclically);
