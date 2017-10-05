//const $ = require('jquery');
const hamburgerInit = require('./modules/hamburger');
const welcome = require('./modules/welcome');
const googleMap = require('./modules/map');
const skills = require('./modules/skills');
const fillSlider = require('./modules/slider');
const transition = require('./modules/transition');

if (document.getElementsByClassName('js-slider').length > 0) {
    fillSlider();
}



