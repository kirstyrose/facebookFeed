facebookFeed
============

To claim your user, access token and secret, register as a dev, create a new app.

https://developers.facebook.com/docs/

Assuming you have already gained an access token, secret and user details, change the configuration.

var config = {
	// key/value
	user: 'username',
	access_token: 'accesstoken',
	secret: 'yoursecret'
};

this is needed for the url to build correctly.

Once you have set this up, create a div and classify it as ('.feed')

$('.feed').append(feed.data[i].message);

This will then append your data.
