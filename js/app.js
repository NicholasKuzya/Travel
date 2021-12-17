$(document).ready(function() {
  window.onload = init;
    $('.select').css('color','#E3C5AA');
    $('.select').change(function() {
       var current = $('.select').val();
       if (current != 'null') {
           $('.select').css('color','#E3C5AA');
       } else {
           $('.select').css('color','#E3C5AA');
       }
    });
 });
 $(document).ready(function(){
  $(".owl-carousel-three").owlCarousel({
    items:3,           
    margin: 30,
    nav: true,
  })
});
 $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center: true, 
    autoplay:false, 
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    stagePadding: 150, 
    items:1,           
    loop:true,     
    margin:0,
    margin: 90,
    nav: true,
  })
});