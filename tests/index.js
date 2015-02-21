/**
 * Copyright 2015 Peter Andreas Moelgaard. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Sentiment140 = require('../index');
var sentiment140 = new Sentiment140({
    auth: '[INSERT YOUR EMAIL HERE]'
});

var dataSimple = {
    "data": {
        "text": "I love Titanic."
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