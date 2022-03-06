// const User = require("../models").User;
const axios = require('axios');
require('dotenv').config();
const mongoose = require('mongoose');
const Cryptocoin = mongoose.model('Cryptocoin');

module.exports = {
    list(req, res) {
        var query = req.query;
        Cryptocoin.find(query, (err, response) => {
            if (err) {
                res.status(400).send('error fetching records: ' + err);
            } else {
                res.status(200).send(response);
            }
        }).limit(100);
    },

    async bulkAdd(req, res) {
        let response = null;
        try {
            response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories', {
                headers: {
                    'X-CMC_PRO_API_KEY': process.env.COINMARKET_API_KEY,
                },
            });
        } catch (error) {
            response = null;
            res.status(400).send(error);
        }
        if (response) {
            const json = response.data;
            Cryptocoin.remove({});
            try {
                Cryptocoin.insertMany(json.data);
                res.status(200).send({message: 'Records inserted'});
            } catch (e) {
                res.status(400).send(error);
            }
        }
    }
}