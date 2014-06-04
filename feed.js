//facebook feed


//create vars
var user = 'username';
var access_token = 'accesstoken';
var secret = 'yoursecret';
	
//build url
var json = 'https://graph.facebook.com/'+user+'/feed?access_token='+access_token+'|'+secret;

//fetch data
$.getJSON(json, function(feed) {

	console.log('feed', feed);

	//loop thorugh data
	for(var i = 0; i < 1; i++) {
			
		var postData = feed.data[i];
      
      		//append data to feed
		$('.feed').append(feed.data[i].message);

	}

})
