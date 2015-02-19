Usage:


	var Sentiment140 = require('sentiment140-nodejs-client');
	var sentiment140 = new Sentiment140({
   		auth: '[INSERT YOUR EMAIL HERE]'
	});

	var dataSimple = {
    	"data": {
        	"id": 1,
        	"text": "I love Titanic.",
        	"query": "Titanic"
    	}
	}
	sentiment140.sentiment(dataSimple, function(error, result) {
    	console.log(JSON.stringify(result));
	});

	var dataBulk = {
    	"data": [
       		{"text": "I love Titanic.", "id": 1 },
        	{"text": "I hate Titanic.", "id": 2 },
        	{"text": "I like Titanic.", "id": 3 }
    	]
	}
	sentiment140.sentiment(dataBulk, function(error, result) {
    	console.log(JSON.stringify(result));
	});

