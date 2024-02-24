import Stripe from "stripe";

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
        unit_amount: Math.round(item.totalProPrice*100), // Make sure price is in cents
      },
      quantity: item.qty || 1
    }));

    console.log(lineItem);


    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItem,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/failed",
    });

    console.log(session);


    res.json({ id: session.id,url:session.url });
  } catch (error) {
    console.error("Error in payment function",error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { payment };
