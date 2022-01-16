const axios = require('axios');

const userKey = `d2838aff8345fac53296697d57240bdf`;

export default axios.create({
    method: 'get',
    url: 'https://developers.zomato.com/api/v2.1/establishments?',
    headers: { Accept: 'application/json', 'user-key': userKey },
    params: {
        city_id: 276
    }
}).then( response => {
    return 'hehehe this FAKIN worked!';
    console.log('response', response);
}).catch(error => {
    console.log('-------THIS IS THE ERROR', error);
    return 'hehehe this DID NOT worked!';
});