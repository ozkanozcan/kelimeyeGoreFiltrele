$(document).ready(function(){
	$( ".l_entry").each(function() {
		var a = $(this).text();
		var b = a.indexOf('HDP');				
		var c = a.indexOf('SS\u00d6');
		var d = a.indexOf('S\u0131rr\u0131 S\u00fcreyya');				
		if ( b != -1 || c != -1|| d != -1 )
			$(this).hide();			
	});
});

/*
Türkçe karakterlerin unicode karşılıkları şunlardır;
ğ - \u011f
Ğ - \u011e
ı - \u0131
İ - \u0130
ö - \u00f6
Ö - \u00d6
ü - \u00fc
Ü - \u00dc
ş - \u015f
Ş - \u015e
ç - \u00e7
Ç - \u00c7
*/
