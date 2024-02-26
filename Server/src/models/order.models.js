import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: 'Product',
        },
        count: Number,
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: 'String',
      default: 'Processing',
      enum: ['Not Processed', 'Processing', 'Dispatched', 'Cancelled', 'Completed', 'Cash On Delivery'],
    },
    orderdBy: { type: ObjectId, ref: 'User' },
  },
  { timestamps: true },
);
const Order = mongoose.model('Order', orderSchema);
export default Order