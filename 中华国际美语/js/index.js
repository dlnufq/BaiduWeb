$(document).ready(function() {
	$(".course .container p").hide();

	var hlen = $('.course .container').children('h4').length;
	var faq = hlen + 1;

	for(var i = 0; i < hlen; i++) {
		if($(".course .container h4").eq(i).html().indexOf("*FAQs") > -1) {
			faq = i;
			$(".course .container h4").eq(i).nextAll("h4").hide();
			break;
		}
	}

	$(".course .container h4").click(function() {
		if($(".course .container h4").index(this) == faq) {
			if($(this).next().is(":hidden")) {
				$(this).nextAll("h4").show();
			} else {
				$(this).nextAll().hide();
			}
		} else {
			if($(this).next().is(":hidden")) {
				$(this).next().show();
			} else {
				$(this).next().hide();
			}
		}
	});
});