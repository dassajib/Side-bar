$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
  });

    $('.dropdown__btn').click(function(){
        $(this).siblings().toggleClass("show");
    $(this).children().toggleClass("rotate");
});

    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });