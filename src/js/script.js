//=require jquery.min.js

// to inlude plugins add "=" sign below
// require bootstrap.min.js
// require slick.min.js 

// require popper-utils.min.js
// require popper.min.js

//=require lightbox.min.js

//=require util.js
//=require tab.js

//=require isotope.pkgd.min.js

;(function($){

	$(document).ready(function(){
		var $grid;

		$grid = $('.ak-portfolio__items').isotope({
		  itemSelector: '.ak-portfolio__item',
		  percentPosition: true,
		  masonry: {
		    // use outer width of grid-sizer for columnWidth
		    columnWidth: '.ak-portfolio__sizer'
		  }
		});

		$('.ak-portfolio__filter').on('click', 'a', function(evt){
			evt.preventDefault();

			var filterValue = $(this).attr('data-filter');
  			$grid.isotope({ filter: filterValue });

  			$('.ak-portfolio__filter a').removeClass('active');
  			$(this).addClass('active');

  			// Toggle lightbox filter
  			$('.ak-portfolio__item a').each(function(){
  				console.log($(this).data('lightbox'));
  				if (filterValue == "*") {
  					$(this).data('lightbox', 'portfolio');
  				} else {
					$(this).data('lightbox', $(this).data('filter'));
  				}
  			});
			//window.lightbox.end();
  			//window.lightbox.init();
  			// lightbox.init();
		});

		$('#mobile-menu-link').on('click', function(evt) {
			evt.preventDefault();
			$(this).toggleClass('open');
			$('#mobile-menu').toggleClass('ak-menu--open');
		});

	});

})(jQuery);