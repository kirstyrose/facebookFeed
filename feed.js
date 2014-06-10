// facebook feed class
var Facebook = function(config) {

	// build the url
	var feedUrl = 'https://graph.facebook.com/'+config.user+'/feed?access_token='+config.access_token+'|'+config.secret;

	// declares a function which requests json from facebook
	var getFacebookFeed = function(callback) {
		// request the data and call the callback
		$.getJSON(feedUrl, callback);
	};
	return {
		getFeed: getFacebookFeed
	};
}

//object
var config = {
	// key/value
	user: 'username',
	access_token: 'accesstoken',
	secret: 'yoursecret'
};

var feed1 = new Facebook(config);
feed1.getFeed(function(feed) {
	//loop through data
	for(var i = 0; i < 1; i++) {
			
		var postData = feed.data[i];
      
      		//append data to feed
		$('.feed').append(feed.data[i].message);

	}
});

feed.update()
