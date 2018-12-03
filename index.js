const querystring = require('querystring');
const request     = require('request');
const iconv       = require('iconv-lite');

module.exports = {

    rfcall(requestSap, callback) {

        const body = querystring.stringify(requestSap.payload);
    
        const options = {
            method: 'POST',
            uri: requestSap.uri,
            body: body,
            headers: {
                'Content-Type': 'application/json',
                'token': requestSap.token
            },
            encoding: null
        }

        request(options, (err, res, body) => {

            if (!err && res.statusCode == 200)
                callback(iconv.decode(Buffer.from(body), 'ISO-8859-1')); // Returns UTF-8
            else
                callback(err);
        });
    }
}