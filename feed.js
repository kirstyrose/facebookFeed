// facebook feed class
var Facebook = function(config) {

	var self = this;

	var defaults = {

		user: null,
		access_token: null,
		secret: null,
		count: 1

	}

	//extend defaults to contfig
	var settings = $.extend(defaults, config);

	//fallback for unset property
	for(property in settings) {

		if(settings[property] == null) console.log('Please fill in '+property);
	}

	// build the url
	var feedUrl = 'https://graph.facebook.com/'+settings.user+'/feed?access_token='+settings.access_token+'|'+settings.secret;


	var privateMethod = {

		append: function(){
			
			$.getJSON(feedUrl, function(feed){

				for(var i = 0; i < settings.count; i++) {
						
					var postData = feed.data[i];
			      
			      	//append data to feed
					$('.feed').append('<li>' + postData.message + '</li>');

				}

			});

		}, 

		init: function(){

			self.publicMethod['alert']()
			privateMethod.append()

		}
	}

	self.publicMethod = {

		alert: function(){

			alert('such structure. many functions. wow');

		}

	}

	privateMethod.init()

}

//new instances
var feed1 = new Facebook({
	user: 'propellercomms',
	access_token: '1418975825038822',
	secret: 'c0383c010531c0f19a1ae48d13a00634',
	count: 8
});
