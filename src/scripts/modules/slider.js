module.exports = function() {
    var slides = [
        {
        subtitle: "Лендинг для магазина бургеров Mr.Burger", 
        techs: "HTML5, CSS3, JavaScript & jQuery, Ajax, Gulp",
        link: "https://usp-evgeniya.github.io/burgers/",
        img: "../img/content/works/work1.png"
        },
        {
        subtitle: "Интернет-магазин лабораторного оборудования и приборов", 
        techs: "HTML5, CSS3, JavaScript & jQuery",
        link: "#",
        img: "../img/content/works/work2.png"
        },
        {
        subtitle: "Лендинг для студии красоты Пион", 
        techs: "HTML5, CSS3, JavaScript & jQuery",
        link: "#",
        img: "../img/content/works/work3.png"
        }
    ];

    var slider = document.querySelector('.js-slider'),
        showingSlide = document.querySelector('.js-slide-img'),
        nextSlide = document.querySelector('.js-slide-next'),
        prevSlide = document.querySelector('.js-slide-prev'),
        btnPrev = document.querySelector('.js-btn-prev'),
        btnNext = document.querySelector('.js-btn-next'),
        subtitle = document.querySelector('.js-slide-subtitle'),
        techs = document.querySelector('.js-slide-techs'),
        link = document.querySelector('.js-slide-link'),
        currentSlide = 0,
        slidesLength = slides.length;

    

    function slideLimiter(eq) {
        if(eq >= slidesLength) {
            return 0;
        } else if(eq < 0) {
            return slidesLength - 1;
        } else {
            return eq;
        }
    }

    function fillSlider() {
        var prev = slideLimiter(currentSlide - 1),
            next = slideLimiter(currentSlide + 1);

        showingSlide.setAttribute('src', slides[currentSlide].img);
        subtitle.innerText = slides[currentSlide].subtitle;
        techs.innerText = slides[currentSlide].techs;
        link.setAttribute('href', slides[currentSlide].link);
        prevSlide.setAttribute('src', slides[prev].img);
        nextSlide.setAttribute('src', slides[next].img);

        console.log(showingSlide.setAttribute('src', slides[currentSlide].img))
    }


    fillSlider();

    btnNext.addEventListener('click', function(e){
        currentSlide = slideLimiter(currentSlide + 1);
        fillSlider();
    });

    btnPrev.addEventListener('click', function(e){
        currentSlide = slideLimiter(currentSlide - 1);
        fillSlider();
    });
  
};