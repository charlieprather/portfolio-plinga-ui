$(document).ready(function(){
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
	});
});



jQuery(document).ready(function ($) {
  
  var $container = $('.grid').masonry({
    columnWidth: 280,
    itemSelector: '.item',
    isFitWidth: true
  });
  
  var arrGreen = new Array($('.i1'),$('.i3'),$('.i6'),$('.i7'));
  var arrRed = new Array($('.i2'),$('.i4'),$('.i5'),$('.i8'), $('.i9'),$('.i10'),$('.i11'),$('.i12'), $('.i13'),$('.i14'),$('.i15'));
  
  $('input').click(function () {
    $('.item').removeClass('expand');
    
    if ($('.green').is(':checked')) {
      $container.masonry('hide', arrRed);
      $(arrGreen).each(function (index, element) {
        element.show();
      });
      $container.masonry();
    } else if ($('.red').is(':checked')) {
      $container.masonry('hide', arrGreen);
      $(arrRed).each(function (index, element) {
        element.show();
      });
      $container.masonry();
    } else if ($('.all').is(':checked')) {
      $(arrGreen).each(function (index, element) {
        element.show();
      });
      $(arrRed).each(function (index, element) {
        element.show();
      });
      $container.masonry();
    }
  });
  
  $('.item').click(function () {
    $(this).toggleClass('expand');
  });
  
});