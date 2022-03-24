var cron = require('node-cron');
const mongoose = require('mongoose');
const Cryptocoin = mongoose.model('Cryptocoin');
const axios = require('axios');

setTimeout(async() => {
    let response = null;
    try {
        response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories', {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.COINMARKET_API_KEY,
            },
        });
    } catch (error) {
        response = null;
        console.log('error fetching records from coinmarket', error);
    }
    if (response) {
        const json = response.data;
        Cryptocoin.remove({});
        try {
            Cryptocoin.insertMany(json.data);
            console.log('Records inserted');
        } catch (e) {
            console.log('Records failed to insert', e);
        }
    }
})

cron.schedule('*/5 * * * *', async () => {
    console.log('running a task every 5 minutes');
        let response = null;
        try {
            response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories', {
                headers: {
                    'X-CMC_PRO_API_KEY': process.env.COINMARKET_API_KEY,
                },
            });
        } catch (error) {
            response = null;
            console.log('error fetching latest list on cron job', error);
        }
        if (response) {
            const json = response.data;
           await Cryptocoin.remove({});
            try {
               await Cryptocoin.insertMany(json.data);
                console.log('Records inserted');
            } catch (err) {
                console.log('error fetching latest list on cron job', err);
            }
        }
});