var $ = require('jquery');

module.exports = $(function(){
    var hamburger = $('.hamburger');
    $('.hamburger__btn').on('click',function (e) {
        e.preventDefault();
        hamburger.toggleClass('active');
    });
});