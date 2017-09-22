var $ = require('jquery');

$(document).ready(function () {
    
    $(function(){
        var mainIntro = $('.main--intro');
        $('.intro__btn-auth').on('click',function (e) {
            e.preventDefault();
            mainIntro.addClass('active');
        });

        $('.form__button--home').on('click',function (e) {
            e.preventDefault();
            mainIntro.removeClass('active');
        });
    });

    $(function(){
        var hamburger = $('.hamburger');
        $('.hamburger__btn').on('click',function (e) {
            e.preventDefault();
            hamburger.toggleClass('active');
        });
    });

    $(function(){
        $('.circle').on('mouseover',function (e) {
            e.preventDefault();
            var elem = $(e.target),
            circleColored = elem.find('.circle__second'),
            percent = circleColored.attr('data-circle');
            strokeDasharray = 2 * Math.PI * 45 * percent / 100;
            circleColored.css('stroke-dasharray', strokeDasharray + ' 282.6');
        });

    });

});


var map;
window.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
  