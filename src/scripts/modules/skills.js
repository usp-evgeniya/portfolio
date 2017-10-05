var $ = require('jquery');

module.exports = $(function(){
    $('.js-circle').on('mouseover touchstart',function (e) {
        e.preventDefault();
        var elem = $(e.target),
          circleColored = elem.find('.js-circle__second'),
          percent = circleColored.attr('data-circle'),
          strokeDasharray = 2 * Math.PI * 45 * percent / 100;
        circleColored.css('stroke-dasharray', strokeDasharray + ' 282.6');
    });

});