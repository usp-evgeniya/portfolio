    module.exports = function() {
        var slides = [
            {
                subtitle: "Лендинг для магазина бургеров Mr.Burger",
                techs: "HTML5, CSS3, JavaScript & jQuery, Ajax, Gulp, Git",
                link: "https://usp-evgeniya.github.io/burgers/",
                img: "img/content/works/burgers.png",
                active: "active",
            }, {
                subtitle: "Сайт фитнес-клуба Афродита",
                techs: "HTML5, CSS3, Git",
                link: "https://usp-evgeniya.github.io/project_afrodita/",
                img: "img/content/works/fitness.png",
                active: "",
            }, {
                subtitle: "Лендинг для студии красоты Пион",
                techs: "HTML5, CSS3, Git",
                link: "https://usp-evgeniya.github.io/project_peony/",
                img: "img/content/works/peony.png",
                active: "",
            }, {
                subtitle: "Сайт-портфолио веб-разработчика",
                techs: "HTML5, CSS3, JavaScript & jQuery, Ajax, Gulp, Git",
                link: "https://usp-evgeniya.github.io/portfolio/dist/",
                img: "img/content/works/portfolio.png",
                active: "",
            }];
   
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
        
            

        }
    
            fillSlider();
    
        btnNext.addEventListener('click', function(e){
            currentSlide = slideLimiter(currentSlide + 1);
            //showingSlide.classList.add('animate');
            fillSlider();
            //showingSlide.classList.remove('animate');
        });
    
        btnPrev.addEventListener('click', function(e){
            currentSlide = slideLimiter(currentSlide - 1);
            fillSlider();
        });
    
    }

