const yargs = require('yargs');

const geo = require('./geo/geo');
const weather = require('./weather/weather');

const args = yargs.argv;
const location = args.location;

const key1 = 'AwmniAB3r9Tg2pVI4fvmD61gJkr0hQAr';
const key2 = 'a3b66384de5cacf673203f0271ac0581';
const geoUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${key1}&location=${location}`;
const weatherUrl = `https://api.darksky.net/forecast/${key2}/`;

// geo
// .getGeoLocation(geoUrl)
// .then((data) => {
//     weather
//     .getWeather(weatherUrl + `${data.lat},${data.lng}`)
//     .then((data) => {
//         console.log(`Temperature: ${data.temperature}, Summary: ${data.summary}`);
//     }, (error) => {
//         console.log(error);
//     });
// }, (error) => {
//     console.log(error);
// });

geo
.getGeoLocation(geoUrl)
.then((data) => {
    return weather.getWeather(weatherUrl + `${data.lat},${data.lng}`);
})
.then((data) => {
    console.log(`Temperature: ${data.temperature}, Summary: ${data.summary}`);
})
.catch((error) => {
    console.log(error);
});