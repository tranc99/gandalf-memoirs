formatDate = function() {
	alert("you moused over");
	$('.date-fmt').each(function() {
		var el = $(this);
		var text = el.text();
		
		if(text.length > 19) {
			text = text.substring(0, 19);
		}
		else if(text.trim() == '') {
			el.text("foolish");
			return true;
		}
		
//		el.text(formatOuputDate(text, SRC_DATE_FORMAT, TARGET_DATE_FORMAT, DEFAULT_DATE_FORMAT));
//		el.text(dateFormat(text, DEFAULT_DATE_FORMAT));
		el.text("coolish");
	});
};
