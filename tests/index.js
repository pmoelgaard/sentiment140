var Sentiment140 = require('../index');
var sentiment140 = new Sentiment140({
    auth: 'sentiment140@petermolgaard.com'
});

var data = {
    "data": [
        {"text": "I love Titanic.", "id": 1 },
        {"text": "I hate Titanic.", "id": 2 },
        {"text": "I like Titanic.", "id": 3 }
    ]
}
sentiment140.bulkClassifyJson(data, function(error, result) {
    console.log(JSON.stringify(result.body));
});