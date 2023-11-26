
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });


    
document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    function changeImage() {
        const imageElement = document.querySelector("#main-img"); 
        const imageSources = [
            "images/testmonial/2.jpg",
            "images/testmonial/3.jpg",
            "images/testmonial/4.jpg",
            "images/testmonial/5.jpg",
            "images/testmonial/6.jpg",
            "images/testmonial/7.jpg",
            "images/testmonial/8.jpg",
            "images/testmonial/9.jpg",
            "images/testmonial/10.jpg",
            "images/testmonial/11.jpg",
            "images/testmonial/12.jpg",
            "images/testmonial/13.jpg",
            "images/testmonial/14.jpg",
            "images/testmonial/15.jpg",
            "images/testmonial/16.jpg",
            "images/testmonial/17.jpg",
            "images/testmonial/18.jpg",
            "images/testmonial/19.jpg",
        ];
    if(currentIndex >= imageSources.length){
        currentIndex=0;
    }
    //  console.log("hello",currentIndex);
      imageElement.src = imageSources[currentIndex];
      currentIndex ++;
      setTimeout(changeImage, 3000);
    }
    changeImage();
  });

  function formOpen(){
    $('#membershipForm').modal();
    
  }