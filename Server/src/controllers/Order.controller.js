import Stripe from "stripe";
import User from "../models/users.models.js";
import Order from "../models/order.models.js";

const stripe = new Stripe(process.env.STRIPE_KEY);
const payment = async (req, res) => {
  try {
    const { cart } = req.body;

    if (!cart) {
      throw new Error("Invalid cart data");
    }

    const lineItem = cart.order_Product.cartItems?.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title,
          images: item.images,
        },
        unit_amount: Math.round(item.price * 100), // Make sure price is in cents
      },
      quantity: item.qty || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItem,
      discounts:[
        {coupon:"free-credits"}
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/failed",
    });

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error("Error in payment function", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addInformation = async (req, res) => {
  try {
    const { addInfo } = req.body;
    const userAdd = await User.findByIdAndUpdate(
      req.params.id,
      {
        address: addInfo,
      }
    );
    res.json("Address Is Add");
  } catch (error) {
    console.log("Address :: ", error);
  }
};

const orderInformation = async (req, res) => {
  try {
    const { orderInfo, id } = req.body;
    const newOrder = new Order({
      products: orderInfo.map((product) => ({
        product: product.id,
        count: product.count,
      })),
      // paymentIntent: { /* Add paymentIntent data */ },
      orderdBy: id,
    });

    await newOrder.save();
    res.json("Order Successful");
  } catch (error) {
    console.log("Order Failed", error);
  }
};

const getAllOrder = async(req,res) =>{
  try {
    const order = await Order.find({}).populate("orderdBy products.product")
    res.json(order)
    console.log("Order Get Success...");
  } catch (error) {
    console.log("Order Get error::",error);
  }
}

const userOrders = async(req,res)=>{
  try {
    const order = await Order.find({orderdBy:req.params.userId}).populate("orderdBy products.product")
    res.json(order)
    console.log("Order Get Success...");
  } catch (error) {
    console.log("Order Get error::");
  }
}
export { payment, orderInformation, addInformation ,getAllOrder,userOrders};
