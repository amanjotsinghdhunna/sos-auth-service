const mongoose = require('mongoose');
const { Schema } = mongoose;
const required = true;
const productSchema = new Schema({
    deleted: { type: Boolean, default: false },
    orderFrom: { type: String, required }, // id
    price: { type: Number, required },
    storeId: { type: String, required },
    variant: { type: String },
    imgUrl: { type: String, required }
})

const Product = mongoose.model('products', productSchema);

module.exports = Product;