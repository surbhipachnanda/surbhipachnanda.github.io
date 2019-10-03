<<<<<<< HEAD
var submitted = false;
var x = window.matchMedia("@media (max-width:500px) and (max-height:800px)");

if (x.matches) {
    $(".menu-items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: $(".next"),
        prevArrow: $(".prev")
    });
} else {
    $(".menu-items").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $(".next"),
        prevArrow: $(".prev")
    });
}

if (x.matches) {
    $(".menu-items1").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: $(".next1"),
        prevArrow: $(".prev1")
    });
} else {
    $(".menu-items1").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $(".next1"),
        prevArrow: $(".prev1")
    });
}
=======
var submitted= false;

$(".menu-items").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: $(".next"),
  prevArrow: $(".prev")
});
$(".menu-items1").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: $(".next1"),
  prevArrow: $(".prev1")
});

>>>>>>> fbdb27925c178e4cdf43cf43359f0ec0d0c43ec0
