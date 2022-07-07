// const User = require("../models").User;
const axios = require('axios');
require('dotenv').config();
const mongoose = require('mongoose');
const Cryptocoin = mongoose.model('Cryptocoin');

module.exports = {
    // fetching records with callback
    // list(req, res) {
    //     var query = req.query;
    //     Cryptocoin.find(query, (err, response) => {
    //         if (err) {
    //             res.status(400).send('error fetching records: ' + err);
    //         } else {
    //             res.status(200).send(response);
    //         }
    //     }).limit(100);
    // },

    // fetching records with promise
    // list(req, res) {
    //     var query = req.query;
    //     Cryptocoin.find(query).limit(100)
    //     .then(result => {
    //         res.status(200).send(result);
    //     })
    //     .catch(err => {
    //         console.log('errored fetching records', err);
    //         res.status(400).send(err);
    //     })
    // },

    // fetching records with async/await function
    async list(req, res) {
        var query = req.query;
        try {
            const result = await Cryptocoin.find(query).limit(100);
            res.status(200).send(result);
        } catch (error) {
            console.log('errored fetching records', error);
            res.status(400).send(error);
        }
    },

    // fetching records with async/await function
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