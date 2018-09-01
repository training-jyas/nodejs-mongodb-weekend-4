const request = require('request');

const getGeoLocation = (url) => {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('some problem in fetching address');
            } else {
                const addObj = body['results'][0]['locations'][0];
                const lat = addObj['displayLatLng']['lat'];
                const lng = addObj['displayLatLng']['lng'];
                console.log(`City: ${addObj['adminArea5']}, State: ${addObj['adminArea3']}, Country: ${addObj['adminArea1']}`);
                resolve({
                    lat,
                    lng
                });
            }
        });
    });
};

module.exports = { 
    getGeoLocation
};