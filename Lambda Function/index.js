const request = require("request-promise");

exports.handler = async (event) => {
    var options = {
        // Update this URI with the URL of your elasticsearch domain
        uri: '',
        body: {
            "size": 20,
            "query": {
                "query_string": {
                    "default_field": "fields.name",
                    "query": event['queryStringParameters']['q']
                }
            }
        },
        json: true
    };

    var result = await request(options);

    return {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": JSON.stringify(result)
    };
};