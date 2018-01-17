var $ = require('jquery');

module.exports = function(){
    var animateSidebar = (function () {

        var articles = $('.js-article'),
            titles = $('.js-sidebar-article'),
            windowMargin = Math.ceil($(window).height() / 2);

        var activeAdd = function (Eq) {
            articles.eq(Eq).addClass('active')
                .siblings().removeClass('active');

            titles.eq(Eq).addClass('active')
                .siblings().removeClass('active');
        };

        activeAdd(0);

        var checkDistance = function (scrollTop, elem) {
            var offset = elem.offset().top;
            var topBorder = offset - scrollTop - windowMargin;
            var midEdge = elem.outerHeight(true) + offset;
            var midBorder = scrollTop + windowMargin - midEdge;

            return topBorder <=0 && midBorder <= 0;

        };

        var defineArticle = function (articles) {
            var activeArticle = articles.filter('.active');
            return {
                activeArticle: activeArticle,
                nextArticle: activeArticle.next(),
                prevArticle: activeArticle.prev()
            };
        };

        return {
            init: function () {

                $(window).on('scroll', function () {
                    var scrollTop = $(window).scrollTop();
                    var article = defineArticle(articles);
                    var fixedPosition = $('.js-section-articles').offset().top;
                    var contentHeight = $('.js-section-articles').innerHeight();
                    var sidebarHeight = $('.js-blog-sidebar').height();
                    var sidebarBottomPos = contentHeight + fixedPosition - scrollTop;

                    if (scrollTop >= fixedPosition) {
                        $('.js-blog-sidebar').addClass('fixed');
                    } else {
                        $('.js-blog-sidebar').removeClass('fixed');
                    }

                    if (sidebarHeight >= sidebarBottomPos) {
                        $('.js-blog-sidebar').addClass('bottom');
                    } else {
                        $('.js-blog-sidebar').removeClass('bottom');
                    }
                    
                    if (article.nextArticle.length) {
                        if (checkDistance(scrollTop, article.nextArticle)) {
                            newEq = article.nextArticle.index();
                            activeAdd(newEq);
                        }
    
                    }

                    if (article.prevArticle.length) {
                        if (checkDistance(scrollTop, article.prevArticle)) {
                            newEq = article.prevArticle.index();
                            activeAdd(newEq);
                        }
    
                    }
                });

                titles.on('click', function(e) {
                    var elem = $(e.target),
                    showEq = elem.index();

                    articles.eq(showEq).addClass('active')
                    .siblings().removeClass('active');

                    var activeArticle = articles.filter('.active');
                    var target = activeArticle.offset().top - (windowMargin / 4);
                    $('html, body').animate({
                        scrollTop : target
                    }, 1000);

                });
            }
        };

    }());

    animateSidebar.init();

};
