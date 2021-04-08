$(function () {

// make links navs to sections

$(".nav-item").click(function () {
  $("html, body").animate({
    scrollTop: $($(this).data('class')).offset().top
  }, 500);
});

// adjust slider height

var winH = $(window).height(),
    linkBarH = $(".link-bar").innerHeight(),
    navBarH = $(".navbar").innerHeight();

$(".carousel .carousel-inner").height(winH - (linkBarH + navBarH));

// trigger viewMore button

var view = $(".about-company button"),
    moreContent = $(".about-company .about-company-content .more-content");

view.click(function () {
  if (moreContent.css('display') == "none") {
    moreContent.slideDown(),
    $(this).text("VIEW LESS");
  } else {
    moreContent.slideUp(),
    $(this).text("VIEW MORE");
  }
});

// make active class to all

var link = $(".featured-work .featured-work-list li"),
    img = $(".featured-work .featured-work-list img");

link.click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  if ($(this).data('class') === 'all') {
    img.fadeIn(500);
  } else {
    img.hide()
    $($(this).data('class')).fadeIn(500);
  }
});

// view more in choose us

var chooseUsButton = $(".choose-us .choose-us-content button"),
    chooseUsMoreContent = $(".choose-us .choose-us-content .choose-us-more-content");

chooseUsButton.click(function () {
  if (chooseUsMoreContent.css('display') == "none") {
    chooseUsMoreContent.slideDown();
    $(this).text("VIEW LESS");
  } else {
    chooseUsMoreContent.slideUp();
    $(this).text("VIEW MORE");
  }
});

// up button


$(".up").click(function () {
  $("html,body").animate({
    scrollTop: 0
  })
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= $(".carousel .carousel-inner").height() + 200) {
    $(".up").fadeIn()
  } else {
    $(".up").fadeOut()
  }
});

});
