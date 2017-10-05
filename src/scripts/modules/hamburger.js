var $ = require('jquery');

module.exports = $(function(){
    var hamburger = $('.js-hamburger');
    $('.js-hamburger__btn').on('click',function (e) {
        e.preventDefault();
        hamburger.toggleClass('active');
        if(hamburger.hasClass('active')) {
            $('body, html').css("overflow", "hidden");
        } else {
            $('body, html').css("overflow", "auto");
        }
    });
});