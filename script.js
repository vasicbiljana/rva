window.onload = (event) => {
    console.log('page is fully loaded');
    const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
  };




const btnsSlide = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btnsSlide.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btnsSlide[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btnsSlide.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
});

window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    
    for( var i=0; i< reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

    

    document.querySelectorAll('.avio .video-container .controls .control-btn').forEach(btn =>{
        btn.onclick = () => {
            let src = btn.getAttribute('data-src');
            document.querySelector('.avio .video-container .video').src = src;

        }
    })

