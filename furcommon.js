function myFunction() {
	var apigClient = apigClientFactory.newClient();
	
	var params = {
		    //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
		    param0: '',
		    param1: '',
			furQueryString: 'value3'
		};
	var body = {
		    //This is where you define the body of the request
		};
	//var body = "";
	var additionalParams = {
		    //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
			/*
		    headers: {
		        param0: '',
		        param1: ''
		    },
		    queryParams: {
		        param0: '',
		        param1: ''
		    }
		    */
		};

	apigClient.helloworldGet(params, body, additionalParams)
		    .then(function(result){
		        //This is where you would put a success callback
		    		console.log("SUCCESS: " + JSON.stringify(result));
		    }).catch( function(result){
		        //This is where you would put an error callback
		    		console.log("ERROR: " + JSON.stringify(result));
		    });	
    //alert("hello world: " + result);
}
