$(document).ready(function() {
    
	$('#gallery_thumbnail a').click(function(e){
		e.preventDefault();
		
		$('#gallery_thumbnail a').removeClass('selected');
		$('#gallery_thumbnail img').animate({'opacity':1,'border-radius':'0'},100);
		
		$(this).addClass('selected');
		$(this).children().animate({'opacity':.4,'border-radius':'15px'},200);
		
		
		var caption=$(this).attr('title');
		var fullsize=$(this).attr('href');
		var preview=fullsize.replace('_fullsize','_preview');
		
		
		$('#gallery_caption').slideUp(400);
		$('#gallery_preview').fadeOut(400,function(){
			$('#loader').css('display','block');
			$('#gallery_preload_area').html("<img src='"+preview+"'>");
			$('#gallery_preload_area img').imgpreload(function(){
			
				$('#gallery_preview').html("<a class='fancy' href='"+fullsize+"' title='"+caption+"' style='background-image:url("+preview+")'></a>");
				$('#gallery_caption').html("<p><a class='fancy' href='"+fullsize+"' title='"+caption+"'>VIEW LARGER</a></p><p>"+caption+"</p>");
				$('#loader').css('display','none');
				
				$('#gallery_preview').fadeIn(400);
				$('#gallery_caption').slideDown(400);
				fancyeffect();
				
			});
				
		});
				
	});
	
});

function fancyeffect(){
	$('a.fancy').fancybox({
	  'overlayShow'	: false,
	  'transitionIn'	: 'elastic',
	  'transitionOut'	: 'elastic'	
	});	
}

