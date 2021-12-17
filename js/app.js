function listen(evnt, elem, func) {
  if (elem.addEventListener)  // W3C DOM
      elem.addEventListener(evnt,func,false);
  else if (elem.attachEvent) { // IE DOM
       var r = elem.attachEvent("on"+evnt, func);
       return r;
  }
  else window.alert('I\'m sorry Dave, I\'m afraid I can\'t do that.');
}

$(document).ready(function() {
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