const request = require('request');

const getWeather = (url) => {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('some problem in fetching weather');
            } else {
                const temperature = body.currently.temperature;
                const summary = body.currently.summary;
                resolve({
                    temperature,
                    summary
                });
            }
        });
    });
};

module.exports = {
    getWeather
};
