  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','//connect.facebook.net/en_US/fbevents.js');

fbq('init', '1672688262943392');
fbq('track', "PageView");

   
	$(document).ready(function() {
    	$(".fancybox").fancybox();
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
			media : {}
			}
		});
	    $('#fullpage').fullpage({autoScrolling:false,responsiveWidth: 1100,scrollOverflow:true});
	});
$(window).load(function() {
  $(".se-pre-con").fadeOut("slow");;
  $('.flexslider').flexslider({
    animation: "fade",
    controlNav: false,
    directionNav: true
  });
  $('#lookbook').slick({
		  infinite: false,
		  speed: 300,
		  slidesToShow: 1,

		  centerMode: false,
		  variableWidth: true,
          prevArrow:'<button type="button" class="slick-prev-custom"></button>',
          nextArrow:'<button type="button" class="slick-next-custom"></button>',
    	 responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        vertical:true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        unslick: true
      }
    }
  ]	
		});
});
<!--END BANNER-->
  

  
        
   function ScrollExecute() {

  	if(!isActive && $(document).height() - 800 < ($(document).scrollTop() + $(window).height())) {

  		isActive = true;

  		scrollNode = $('.product#more').last();

  		scrollURL = $('.product#more p a').last().attr("href");

  		if(scrollNode.length > 0 && scrollNode.css('display') != 'none') {

            $.ajax({

              type: 'GET',

              url: scrollURL,

              beforeSend: function() {

              scrollNode.clone().empty().insertAfter(scrollNode);

              scrollNode.hide();

            },

            success: function(data) {

            // remove loading feedback

                scrollNode.next().remove();

                var filteredData = $(data).find(".product");

                filteredData.insertBefore( $("#product-list-foot") );

                isActive = false;

            },

           	  dataType: "html"

            });

  		}

  	  }

      }

  	var isActive = false;

      $(document).ready(function () {

      	$(window).scroll(function(){

      		$.doTimeout( 'scroll', 500, ScrollExecute);

      	});

      });
   	 
    
  function init() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i=0; i<imgDefer.length; i++) {
  if(imgDefer[i].getAttribute('data-src')) {
  imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
  } } }
  window.onload = init;
  