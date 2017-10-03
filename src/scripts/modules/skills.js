var $ = require('jquery');

module.exports = $(function(){
    $('.circle').on('mouseover',function (e) {
        e.preventDefault();
        var elem = $(e.target),
          circleColored = elem.find('.circle__second'),
          percent = circleColored.attr('data-circle'),
          strokeDasharray = 2 * Math.PI * 45 * percent / 100;
        circleColored.css('stroke-dasharray', strokeDasharray + ' 282.6');
    });

});