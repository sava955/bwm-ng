const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: {type: String, required: true, max: [120, 'Too lang, max is 120 characters']},
    city: {type: String, required: true, lowercase: true},
    street: {type: String, required: true, min: [4, 'Too short, min is 4 characters']},
    category: {type: String, required: true, lowercase: true},
    img: {type: String, required: true},
    badrooms: Number,
    shared: Boolean,
    description: {type: String, required: true},
    dailyRate: Number,
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Rental', rentalSchema);
