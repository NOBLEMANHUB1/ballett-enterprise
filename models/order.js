const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    name:  { type: String, required: true },
    price: { type: Number, required: true },
    qty:   { type: Number, required: true },
    image: { type: String }
  }],
  delivery: {
    firstName: String,
    lastName:  String,
    email:     String,
    phone:     String,
    address:   String,
    city:      String,
    region:    String,
    note:      String
  },
  payment: {
    method:    { type: String, required: true },
    reference: { type: String },
    status:    { type: String, default: 'pending' }
  },
  subtotal:    { type: Number, required: true },
  deliveryFee: { type: Number, default: 20 },
  total:       { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);