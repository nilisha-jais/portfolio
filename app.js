(function($) { "use strict";
 
$(function() {
    var header = $(".start-style");
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
    if (scroll >= 10) {
    header.removeClass('start-style').addClass("scroll-on");
    } else {
    header.removeClass("scroll-on").addClass('start-style');
    }
    });
});		
    
//Animation

$(document).ready(function() {
    $('body.hero-anime').removeClass('hero-anime');
});

//Menu On Hover
    
$('body').on('mouseenter mouseleave','.nav-item',function(e){
    if ($(window).width() > 750) {
    var _d=$(e.target).closest('.nav-item');_d.addClass('show');
    setTimeout(function(){
    _d[_d.is(':hover')?'addClass':'removeClass']('show');
    },1);
    }
});	

//Switch light/dark

$("#switch").on('click', function () {
    if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $("#switch").removeClass("switched");
    }
    else {
    $("body").addClass("dark");
    $("#switch").addClass("switched");
    }
});  

})(jQuery);

const barOuter = document.querySelector(".bar-outer");
const options = document.querySelectorAll(".bar-grey .option");
let current = 1;
options.forEach((option, i) => (option.index = i + 1));
options.forEach(option =>
                option.addEventListener("click", function() {
  barOuter.className = "bar-outer";
  barOuter.classList.add(`pos${option.index}`);
  if (option.index > current) {
    barOuter.classList.add("right");
  } else if (option.index < current) {
    barOuter.classList.add("left");
  }
  current = option.index;
}));

AOS.init({
  duration: 1200,
})
