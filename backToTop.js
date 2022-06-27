      /* Back to TOP section 
			<div class="backToTop">
				<i class="fa-solid fa-circle-arrow-up"></i>
			</div>
        END Back to top */
       
       /* ================= jQuery ====================*/
       //Back to top
				$(window).scroll(function(){
					var showAfter = 100;
  					if ( $(this).scrollTop() > showAfter ) 
					{ 
  						$('.backToTop').fadeIn();
  					} else { 
   						$('.backToTop').fadeOut();
  					}
				});

				$('.backToTop').click(function()
				{
  					$('html, body').animate({scrollTop : 0},600);
 				});
        /* ================= END jQuery ====================*/
