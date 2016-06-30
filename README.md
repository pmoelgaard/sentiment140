Sentiment Analysis 140
===

JavaScript wrapper for the [Sentiment140 Natural Language Processing Service](http://www.sentiment140.com/).


---

Installation
---
	npm install sentiment140 [--save]
	
	
Usage
---

### Setup

	var Sentiment140 = require('sentiment140');
	var sentiment140 = new Sentiment140({
   		auth: '[INSERT YOUR EMAIL HERE]'
	});

    
### Simple Analysis
Takes a simple string.

###### Request

	var dataSimple = {
    	"data": {
        	"text": "I am a Teapot and a Submarine"
    	}
	}
	sentiment140.sentiment(dataSimple, function(error, result) {
    	console.log(JSON.stringify(result));
	});
    
###### Response
	[Missing]

    
### Bulk Detection
Takes an array of simple strings.

###### Request
    
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
    
###### Response
	[Missing]


Promises & Callbacks
---

The sentiment140 library now supports both traditional callback return functions as well as Promises.
Sentiment140 uses the bluebird library for the promise implementation.

---

Author
---
Peter Andreas Moelgaard ([GitHub](https://github.com/pmoelgaard), [Twitter](https://twitter.com/petermoelgaard))

License
---
Licensed under the Apache License, Version 2.0: [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)