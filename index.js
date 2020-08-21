"use strict";

const promise = require('request-promise');

const rfc = (request) => {

    return new Promise((resolve, reject) => {

        const headers = {
            'Content-Type': 'application/json',
            token: request.token
        }

        const options = {
            url: request.uri,
            method: 'POST',
            headers: headers,
            body: request.payload,
            json: true,
            encoding: 'latin1'
        }

        promise(options)
            .then(body => resolve(body))
            .catch(err => reject(err));
    });
}

module.exports = rfc;