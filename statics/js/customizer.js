// customizer.js

$(document).ready(function() {

	var customizer = $('.customizer');

	var handle = customizer.find('.customizer-handle');
	var handleIcon = handle.find('i');

	handle.on('click', function() {

		customizer.toggleClass("expanded");

	});

	customizer.on('click', '.accent', function() {

		var accent = $(this);

		var colour = accent.attr('id');
		colour = colour.replace('#', '');

		$('#accent-scheme').attr('href', 'statics/styles/css/paper-' + colour + '.css');

		handleIcon.css('color', accent.css('background-color'));

	});

});

