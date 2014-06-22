facebookFeed
============

To claim your user, access token and secret; register as a dev and create a new app.

https://developers.facebook.com/docs/

Multiple Instances
=====

Assuming you have already gained an access token, secret and user details. Change the configuration.

    // new instances
	var feed1 = new Facebook({

		user: 'user',
		access_token: 'access_token',
		secret: 'secret',
		count: 8

	});

Entering your user, access token and secret will override the config information. 

	var config = {
		// key/value
		user: 'username',
		access_token: 'accesstoken',
		secret: 'yoursecret'
	};

If you do not enter this information, it will log an error message in the console:

	if(settings[property] == null) console.log('Please fill in '+property);

You can create as many new instances as you like. We are simply overwriting the default config.

=====

Once you have set this up, create a div and classify it as ('.feed') Your data will then be appended to this div.

Updates
=====

Facebook Downtime Fallback