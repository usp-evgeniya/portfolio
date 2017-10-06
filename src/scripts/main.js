//const $ = require('jquery');
const hamburgerInit = require('./modules/hamburger');
const welcome = require('./modules/welcome');
const googleMap = require('./modules/map');
const skills = require('./modules/skills');
const fillSlider = require('./modules/slider');
const transition = require('./modules/transition');
const blurInit = require('./modules/blur');

if (document.getElementsByClassName('js-slider').length > 0) {
    fillSlider();
}

if (document.getElementsByClassName('js-hero-btn').length > 0) {
    transition();
}

if (document.getElementsByClassName('js-blur-bg').length > 0) {
    blurInit();
}


