/*module.exports = function() {
    var sections = document.getElementsByClassName('section'),
        target = sections[1],
        elem = document.querySelector('.js-hero-btn');
        targetCoordinateX = target.getBoundingClientRect().left,
        targetCoordinateY = target.getBoundingClientRect().top;
        console.log(target);

        elem.addEventListener('click', function(e){
            e.preventDefault();
            console.log(elem);

            window.scrollTo( targetCoordinateX, targetCoordinateY);
        });
}*/

var $ = require('jquery');

module.exports = function() {
    function ScrollTo(sectionNumber) {
        var target = $('.section').eq(sectionNumber).offset().top
        $('html, body').animate({
            scrollTop : target
        }, 1000);
    }

    $(function() {
        $('.js-hero-btn').on('click', function(e) {
            e.preventDefault();
            ScrollTo(1)
        })
    })

    $(function() {
        $('.js-comments-btn').on('click', function(e) {
            e.preventDefault();
            ScrollTo(0)
        })
    })
}