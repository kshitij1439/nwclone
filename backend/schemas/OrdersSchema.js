const {Schema}= require("mongoose");
const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    percent: String,
    mode:String,
});
module.exports ={OrdersSchema};