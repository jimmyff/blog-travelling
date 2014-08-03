$(document).ready(function() {
  $('a.menu').click(function() {
	if ($('body').hasClass('menu-open')) {
		$('.site-header nav').fadeOut(500, function () {

			$('body').removeClass('menu-open');
		});
	} else {
		$('body').addClass('menu-open');
		$('.site-header nav').fadeIn(250);
	}
    return false;
  });

  $(window).resize(function(){
    var w = $(window).width();
    var menu = $('.site-header nav');
    if(w > 680 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });


  $('article.post iframe').wrap('<div class="video-container" />');

});


$(function(){
  $('<img>').attr('src',function(){
      var imgUrl = $('div.featured-image').css('background-image');
      if (!imgUrl) {
        return;
      }
      imgUrl = imgUrl.substring(4, imgUrl.length-1);
      return imgUrl;
  }).load(function(){
    $('img.loading').fadeOut(500);
    $('div.overlay').fadeTo("slow", 0.8);
  });
});

$(function(){
    $('.post-list li').each(function(i){
        var t = $(this);
        setTimeout(function(){ t.addClass('slider'); }, (i+1) * 330);
    });
});
