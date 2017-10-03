const $ = require('jquery');

module.exports = $(function(){
    $('.intro__btn-auth').on('click',function (e) {
        e.preventDefault();
        var elem = $(e.target),
            mainIntro = elem.closest('.main--intro');

        mainIntro.addClass('active');
    });

    $('.form__button--home').on('click',function (e) {
        e.preventDefault();
        var elem = $(e.target),
            mainIntro = elem.closest('.main--intro');

        mainIntro.removeClass('active');
    });
});