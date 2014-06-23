// facebook feed class
var Facebook = function(config) {

	var self = this;

	var defaults = {

		user: null,
		access_token: null,
		secret: null,
		count: 1

	}

	// extend defaults to config
	var settings = $.extend(defaults, config);

	// fallback for unset property
	for(property in settings) {

		if(settings[property] == null) console.log('Please fill in '+property);
	}

	// build the url
	var feedUrl = 'https://graph.facebook.com/'+settings.user+'/feed?access_token='+settings.access_token+'|'+settings.secret;

	var privateMethod = {

		append: function(){

			$.getJSON(feedUrl, function(feed){

				$('.feed').empty();

				for(var i = 0; i < settings.count; i++) {
						
					var postData = feed.data[i];
			      
			      	// append data to feed
					$('.feed').append('<li>' + postData.message + '</li>');

				}

			})
			// return error message if request fails
			.error(function(){

				$('.feed').html('<p>Error Fetching Data</p>');

			})

		}, 

		init: function(){

			privateMethod.append()

		}
	}

	privateMethod.init()

}

// new instances
var feed1 = new Facebook({

	user: 'user',
	access_token: 'access_token',
	secret: 'secret',
	count: 8

});