$(function () {

	$('.post__main img').on('click', function () {
		var $img = $(this);

		$.fancybox.open([{
			src: $img.attr('src'),
			type: 'image'
		}]);
	});

	$('[data-fancybox]').fancybox({
		// closeClickOutside: false, 
		image: {
			protect: true
		}
	});

	// key bind

	// j  down
	// k  top
	// t  page top
	// b  page bottom

	// i  go index
	var $body = $('html');

	var isKeydown = false;
	$body.on('keydown', function (e) {
		// console.log(e.which, 'key down');

		switch (e.which) {
			case 74: // j down
				if (!isKeydown) {
					isKeydown = true;
					requestAnimationFrame(function animate() {
						var curTop = window.scrollY;
						window.scrollTo(0, curTop + 15);

						if (isKeydown) {
							requestAnimationFrame(animate);
						}
					});
				}

				break;

			case 75: // k up
				if (!isKeydown) {
					isKeydown = true;
					requestAnimationFrame(function animate() {
						var curTop = window.scrollY;
						window.scrollTo(0, curTop - 15);

						if (isKeydown) {
							requestAnimationFrame(animate);
						}
					});
				}

				break;

			case 191: // shift + / = ? show help modal
				break;

				// 16 shift
			case 84: // t
				window.scrollToTop(1);
				break;

			case 66: // b
				window.scrollToBottom();
				break;

			case 78: // n half
				window.scrollPageDown(1);
				break;

			case 77: // m
				window.scrollPageUp(1);
				break;
		}

	});

	$body.on('keyup', function (e) {
		isKeydown = false;
	});

	// print hint

	var comments = [
		'',
		' ::                                                      #############',
		'   ::                                                          ##',
		'     ::                                         ##############################',         
		'::        :::::::::::::::::::::::               #     ##       ##    ##      #',    
		'::                             ::               #       ##     ##      ##    #',
		'::                             ::               #    ##        ##   ##       #',
		'::                             ::               #      ##      ##      ##    #',
		'::       :::::::::::::::       ::',
		'::       				        ::                 ##########       #########',
		'::         :::::::::::         ::                 #                        #',
		'::                             ::                 ##########       #########',
		'::                             ::                 #                        #',
		'::       ::::::::::::::::      ::                 ##########       #########',
		'::                             ::                           ##   ##',
		'::                             ::                         ##     ##',
		'::                             ::                       ##       ##', 
		'::                        ::   ::                     ##         ##',
		'::                          :: ::                   ##           ##          ##',
		'::                             ::                ##              ##############',
		''        

	];

	comments.forEach(function (item) {
		console.log('%c' + item, 'color: #399c9c');
	});

	$('.btn-reward').on('click', function (e) {
		e.preventDefault();

		var $reward = $('.reward-wrapper');
		$reward.slideToggle();
	});

	$('body').addClass('queue-in');
	setTimeout(function() {
		$('body').css({ opacity: 1}).removeClass('queue-in');
	}, 500);

});
