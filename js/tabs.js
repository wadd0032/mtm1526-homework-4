// JavaScript Document

$(document).ready(function() {
	$('.tabs a').on('click', function (ev) {
		var tabToShow = $(this).attr('href');
		
		$('.content div').hide('slow');
		$(tabToShow).show('slow');
	});
});