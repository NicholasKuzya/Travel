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