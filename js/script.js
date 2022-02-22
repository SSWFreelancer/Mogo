$(document).ready(function () {
  $(".main__slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    appendDots: $(".slider-mydots"),
    speed: 1000,
    initialSlide: 0,
    easing: "ease-in",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
  });
});

$(document).ready(function () {
   $('.block__title').click(function(event){
      if($('.wedo__spoilers').hasClass('one')){
         $('.block__title').not($(this)).removeClass('active');
         $('.block__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   })
});


function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

ibg();

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .menu").toggleClass("active");
    $("html, body").toggleClass("lock");
  });
});
$(document).ready(function () {
   $('.menu__link').click(function (event) {
      $('html, body').removeClass('lock');
       $('.header__burger, .menu').removeClass('active');
   });
});

$(document).ready(function () {
  $(".comments__container").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    speed: 1000,
    initialSlide: 0,
    easing: "ease-in",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
  });
});


$(document).ready(function () {
  $(".mark__container").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    speed: 1000,
    initialSlide: 0,
    easing: "ease-in",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
  });
});

$(function() {
  $(".footer-btn").on("click", validate);
 
  // Validate email
  function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
 
  // validate email and send form after success validation
  function validate() {
    var email = $(".email").val();
 
    if (validateEmail(email)) {
      $(".email").addClass("success");
      
    } else {
       $(".email").addClass("error");
    }
    return false;
  }
});