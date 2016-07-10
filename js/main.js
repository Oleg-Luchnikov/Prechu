"use strict";
var mySwiper = new Swiper ('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
});

$("#mobile-nav").mmenu({
               "slidingSubmenus": false,
               "offCanvas": {
                  "position": "right"
               }
            });