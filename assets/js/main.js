/*game studio js*/
(function($) {

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

// Fix: Placeholder polyfill.
$('form').placeholder();

// Prioritize "important" elements on medium.
	skel.on('+medium -medium', function() {
		$.prioritize(
			'.important\\28 medium\\29',
			skel.breakpoint('medium').active
		);
	});

// Scrolly.
	$('.scrolly').scrolly();

// Gallery.
$('.gallery').each(function() {

	var	$gallery = $(this),
		$content = $gallery.find('.content');

	// Poptrox.
		$content.poptrox({
			usePopupCaption: true
		});

// Tabs.
$gallery.each( function() {

	var $this = $(this),
		$tabs = $this.find('.tabs a'),
		$media = $this.find('.media');

	$tabs.on('click', function(e) {

		var $this = $(this),
			tag = $this.data('tag');

		// Prevent default.
			 e.preventDefault();

		// Remove active class from all tabs.
			$tabs.removeClass('active');

		// Reapply active class to current tab.
			$this.addClass('active');

		// Hide media that do not have the same class as the clicked tab.
			$media
				.fadeOut('fast')
				.each(function() {

					var $this = $(this);

					if ($this.hasClass(tag))
						$this
							.fadeOut('fast')
							.delay(200)
							.queue(function(next) {
								$this.fadeIn();
								next();
							});

				});

	});

});

});





		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	// Off-Canvas Navigation.

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					$('#nav').html() +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
				});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

	});

})(jQuery);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
   if (slideIndex > slides.length)
   { slideIndex=1}

  slides[slideIndex-1].style.display= "block";

  setTimeout(showSlides, 7000);
}


var slideIndex = 0;
showSlides1();

function showSlides1() {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
       for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slideIndex++;
   if (slideIndex > slides1.length)
   { slideIndex=1}

  slides1[slideIndex-1].style.display= "block";

  setTimeout(showSlides1, 7000);
}


/*new slider*/


var sliderOptions=
{
	sliderId: "slider",
	startSlide: 0,
	effect: "series1",
	effectRandom: false,
	pauseTime: 2600,
	transitionTime: 500,
	slices: 12,
	boxes: 8,
	hoverPause: 1,
	autoAdvance: true,
	thumbnailsWrapperId: "thumbs",
	m: false,
	license: "mylicense"
};

var imageSlider=new mcImgSlider(sliderOptions);




