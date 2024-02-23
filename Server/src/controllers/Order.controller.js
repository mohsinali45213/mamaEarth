import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY);
const payment = async (req, res) => {
  try {
    const { cart } = req.body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      throw new Error("Invalid cart data");
    }

    const listItem = cart?.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: item.images,
        },
        unit_amount: Math.round(item.totalProPrice), // Make sure price is in cents
      },
      quantity: item.qty || 1
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: listItem,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/failed",
    });

    console.log(session.total_details);

    // res.json({ id: session.id });
  } catch (error) {
    console.error("Error in payment function",error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { payment };
