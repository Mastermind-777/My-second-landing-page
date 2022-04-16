$(document).ready(function(){
$('.header-burger').click(function(event){
  $('.header-burger, .header-nav').toggleClass('active');
  $('body').toggleClass('lock');
})
});

$(document).ready(function(){

  $('.slider').slick({
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      arrows: 'false'
  });
  
});