// facebook feed class
var Facebook = function(config) {

	var self = this;

	var defaults = {

		user: null,
		access_token: null,
		secret: null,
		count: 1

	}

	//extend defaults to config
	var settings = $.extend(defaults, config);

	//fallback for unset property
	for(property in settings) {

		if(settings[property] == null) console.log('Please fill in '+property);
	}

	// build the url
	var feedUrl = 'https://graph.facebook.com/'+settings.user+'/feed?access_token='+settings.access_token+'|'+settings.secret;


	var privateMethod = {

		append: function(){

			$.ajax(
			{
				type: 'GET',
				url: feedUrl,
				success: function(data) {
					$.getJSON(feedUrl, function(feed){

						for(var i = 0; i < settings.count; i++) {

							var postData = feed.data[i];

							if(!postData.message) {
								// Skips images and shared posts by not rendering the post and adding one to the count to accommodate the skipped one.
								settings.count++
							} else {
					      		//append data to feed
								$('.feed').append('<li>' + postData.message + '</li>');
							}

						}

					});
				},
				error: function() {
					$('.feed').append('<li>ohhh, Facebook seems to be down... Whoops!</li>');
				}
			});

		},

		init: function(){

			privateMethod.append()

		}
	}

	privateMethod.init()

}

//new instances
var feed1 = new Facebook({
	user: 'username',
	access_token: 'access token',
	secret: 'secret',
	count: 8
});
