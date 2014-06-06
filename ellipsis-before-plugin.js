/* 
=== === === === === === === === === === === ===
What:   Ellipsis before plugin
Who:    Michael 
When:   June 2014 
=== === === === === === === === === === === === 
*/

(function ( $ ) {
 
    $.fn.ellipsis = function(options) {

    	var settings = $.extend({
    		length	: 4
    	}, options);

    	return this.each(function() {

    		var that = $(this);

    		if (that.text().length > settings.length) {

				var str = that.text().trim();

				var newString = str.slice(-settings.length);
				newString = "\u2026" + newString;

				that.text(newString);

    		}

    	});

	}

	/* Use optional length example

	$("element").ellipsis({
		length	: ??
	});

	*/			

}( jQuery ));
