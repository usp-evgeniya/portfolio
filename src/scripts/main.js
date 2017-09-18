var $ = require('jquery');

$(document).ready(function () {
    
    $(function(){
        var mainIntro = $('.main__intro');
        $('.intro__btn-auth').on('click',function (e) {
            e.preventDefault();
            mainIntro.addClass('active');
        });

        $('.form__button--home').on('click',function (e) {
            e.preventDefault();
            mainIntro.removeClass('active');
        });
    });
});