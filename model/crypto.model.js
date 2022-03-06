const mongoose = require('mongoose');

var CryptocoinSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String },
    description: { type: String },
    num_tokens: { type: Number },
    avg_price_change: { type: Number },
    market_cap: { type: Number },
    market_cap_change: { type: Number },
    volume: { type: Number },
    volume_change: { type: Number },
    last_updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cryptocoin', CryptocoinSchema);