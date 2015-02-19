var Sentiment140 = require('../index');
var sentiment140 = new Sentiment140({
    version: 'v1',
    auth: 'sentiment140@petermolgaard.com'
});

var data = [
    'Hello World'
];
sentiment140.bulkClassifyJson(data, function(error, result) {
    console.log(error);
    console.log(result);
});