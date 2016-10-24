//nav顶部切换
!function(){
	var $goTop = $('.go-top'),
	    $body = $('body'),
			$navbar = $('.navbar.navbar-default'),
			timer;
			$(window).on('scroll',function(){
		      timer && clearTimeout(timer);
					timer = setTimeout(function(){
							if ($(window).scrollTop() > 200) {
									$navbar.removeClass('top');
                  if ($(window).scrollTop() > 500) {
											$goTop.removeClass('hidden');
									}
							} else {
								  $navbar.addClass('top');
									if ($(window).scrollTop() < 500) {
											$goTop.addClass('hidden');
									}
							}
					}, 500);
			});
			$goTop.on('click',function(){
					$body.animate({scrollTop: 0},'slow');
			});
}();
!function(){
	$('.article-tab').on('mouseover','li',function(){
		var $this = $(this);
		var $curIdx = $this.index();
		if ($this.hasClass('active')) return;
		$this.addClass('active').siblings().removeClass('active');
    $('.article-list > .list').eq($curIdx).removeClass('hidden').siblings().addClass('hidden');
 	});
}();

!function(){
	var $goTop = $('.go-top'),
	    $body = $('body'),
			timer;
	$body.on('scroll',function(){
		timer && clearTimeout(timer);
		timer = setTimeout(function(){

		},500)
	})


}();
