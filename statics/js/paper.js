/* =========================

App: Paper - Minimal Blog Template
Version: 1.0
Author: Hardik Manktala
Contact:
	- http://www.hardikmanktala.com
	- chat@hardikmanktala.com
	- Skype: hardik.manktala


root.js - Main Script

======================= */

"use strict";

$(document).ready(function() {

	navbarScroll();
	postLikes();
	backToTop();
	preLoader();



	/*============================================
    ScrollTo Links
    ==============================================*/
    $('a.scrollto').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });


});

function backToTop() {

	var btp = $('.back-to-top');
	btp.hide();
	$(window).on('scroll', function() {

		if($(window).scrollTop() === 0) {
			btp.hide("slow");
		}
		else {
			btp.show("slow");
		}

	});

	btp.on('click', function() {
		$("html, body").animate({ scrollTop: 0 }, "slow"); 
	});

}

function navbarScroll() {
	var navCheck = $('.navbar-check').attr('title');
	if(navCheck == "true") {
		var navIntro = $('.nav-intro-strip');
		var navPrimary = $('.nav-primary');
		var wrapper = $('#wrapper');

		$(window).on('scroll', function() {
			if ($(window).scrollTop() === 0) {
		        navIntro.css('top', '0px');
		        navPrimary.css('top', '75px');
		        wrapper.css('margin-top', '129px');

		    } else {
		       	navIntro.css('top', '-75px');
		        navPrimary.css('top', '0px');
		        wrapper.css('margin-top', '54px');
		    }
		});
	}
}	

function postLikes() {

	var heart = $('.heart-post-btn');

	heart.each(function() {
		var heart = $(this);

		heart.on('click', function() {
			if(heart.attr('class').indexOf('fa-heart-o') > 0) {
				heart.removeClass('fa-heart-o');
				heart.addClass('fa-heart');
			}
			else {
				heart.removeClass('fa-heart');
				heart.addClass('fa-heart-o');
			}
		});

	});

	

}

function preLoader() {

	var preloader = $('.preloader');
	var pBar = preloader.find('.progress-bar');
	
	var wrapper = $('#wrapper');

	var interval = setInterval(updatePreloader, 10);
	var curWidth = pBar.width() / pBar.parent().width() * 100;

	function updatePreloader() {

		if(curWidth >= 100) {
			clearInterval(interval);
			wrapper.css('display', 'block');
			pBar.css('opacity', '0');
		}
		else {
			curWidth++;
			pBar.css('width', parseInt(curWidth, 10) + '%');
		}

	}
}