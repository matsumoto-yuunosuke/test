  // アンカーリンク
  jQuery(function() {
    var windowWidth = $(window).width();
    var windowSm = 897; // スマホに切り替わる横幅
    if (windowWidth <= windowSm) {
      var headerHight = 70; // スマホのヘッダー等の高さ分の数値を入れる
    } else {
      var headerHight = 65; // PC のヘッダー等の高さ分の数値を入れる
    }
    jQuery('a[href^="#"]').click(function() {
      var speed = 500;
      var href = jQuery(this).attr("href");
      var target = jQuery(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - headerHight;
      jQuery("body,html").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  });

$(function() {
$("#wrap").waypoint({
handler: function(direction) {
          
    if (direction == 'down') {
    
        $("nav").addClass('scroll');
        $("nav.scroll").hide().slideDown(300);
    
    }else if(direction == 'up'){
    
        $("nav.scroll").slideUp(200,function(){
            $("nav").removeClass('scroll').show();
        });
 
    }// if end
 
}
});
});


$(document).ready(function() {
	$('[data-fancybox]').fancybox({
	toolbar : true,
	infobar : false,
	buttons : [
		'close'
	],
	});
});


$(function () {
        $('.long').jscroll({
          autoTrigger: false, 
          nextSelector: 'a.next',
        });
      });