import React, { useState } from "react";
import "../Style/Orders.css";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { orderInfo, orderProduct, payment } from "../Function/Product";
import toast from "react-hot-toast";
const Orders = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const order_items = useSelector((state) => state.cart.orderItems);
  const [add, setAdd] = useState([]);

  const sliceAbout = (about) => {
    if (about?.length > 80) {
      return about?.slice(0, 80) + " ...";
    }
    return about?.trim();
  };

  const handleInput = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  const payments = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("user"));
    const userAdd = await orderInfo(userId, add)

    const stripe = await loadStripe(
      "pk_test_51OEqcMSILGLLt0ZXzFfwjmLN7qqAnWU956fZ2o4o9ca4aa5KyYtjHmGQcod1BQer8djhPi8AglGzZXpQmnowLbPN00Ts8B7EdP"
      );
      
      const session = await payment(order_items);
      if (!session) {
        toast.error("Order Failed");
      }
      const pro = order_items.order_Product.cartItems.map((item) => ({
        id: item._id,
        count: item.qty,
      }));
      const data = await orderProduct(userId, pro);
      localStorage.removeItem("localCart");
      if (session) {
        const result = stripe.redirectToCheckout({
          sessionId: session.id,
        });
    }
  };

  return (
    <div className="order-wrapper">
      <div className="payment-container">
        <form onSubmit={payments}>
          <h4>Hi Mohsin, Welcome to Mamaearth</h4>
          <h3>New Delivery Address</h3>
          <div>
            <input
              onChange={handleInput}
              type="text"
              placeholder="First Name*"
              name="fname"
              required
            />
            <input
              onChange={handleInput}
              type="text"
              placeholder="Last Name*"
              name="lname"
              required
            />
          </div>
          <div>
            <input
              onChange={handleInput}
              type="email"
              name="email"
              placeholder="Email ID*"
              required
            />
            <input
              onChange={handleInput}
              type="tel"
              name="number"
              placeholder="Phone*"
              required
            />
          </div>
          <div>
            <input
              onChange={handleInput}
              type="text"
              name="pincode"
              placeholder="Pin Code*"
              required
            />
            <input
              onChange={handleInput}
              type="text"
              name="city"
              placeholder="City*"
              required
            />
            <input
              onChange={handleInput}
              type="text"
              name="state"
              placeholder="State*"
              required
            />
          </div>
          <div>
            <input
              type="text"
              onChange={handleInput}
              name="address"
              placeholder="Address (House No, Building, Street, Area)*"
              required
            />
          </div>
          <h3>Choose payment method</h3>
          <div className="payment-methods">
            <div className="payment-option">
              <button
                onClick={() => setPaymentMethod("upi")}
                className={`${paymentMethod === "upi" ? "isActive" : ""}`}
              >
                <p>
                  <p></p>
                </p>
                <span>UPI</span>
              </button>
              <button
                onClick={() => setPaymentMethod("cdc")}
                className={`${paymentMethod === "cdc" ? "isActive" : ""}`}
              >
                <p>
                  <p></p>
                </p>
                <span>Credit/Debit Cart</span>
              </button>
              <button
                onClick={() => setPaymentMethod("nb")}
                className={`${paymentMethod === "nb" ? "isActive" : ""}`}
              >
                <p>
                  <p></p>
                </p>
                <span>Net Banking</span>
              </button>
              <button
                onClick={() => setPaymentMethod("w")}
                className={`${paymentMethod === "w" ? "isActive" : ""}`}
              >
                <p>
                  <p></p>
                </p>
                <span>Wallets</span>
              </button>
              <button
                onClick={() => setPaymentMethod("cod")}
                className={`${paymentMethod === "cod" ? "isActive" : ""}`}
              >
                <p>
                  <p></p>
                </p>
                <span>Cash On Delivery</span>
              </button>
            </div>
            <div className="payment-info">
              {paymentMethod == "cdc" ? (
                <div className="CD-card-container">
                  <h4 className="payment-name">
                    Pay Using Credit Or Debit Cards
                  </h4>
                  <div className="cart-information">
                    <div>
                      <input type="text" placeholder="Cart Number" />
                    </div>
                    <div>
                      <input type="text" placeholder="MM/YY" />
                      <input type="text" placeholder="CVV" />
                    </div>
                    <div>
                      <input type="text" placeholder="Number Of The Cart" />
                    </div>
                  </div>
                  <button type="submit" className="place-order">
                    PLACE ORDER
                  </button>
                  <div className="security pay">
                    <img src="https://images.mamaearth.in/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" />
                    <h6>100% Payment Protection, Easy Return Policy</h6>
                  </div>
                  <div className="payment-img">
                    <img src="https://images.mamaearth.in/wysiwyg/visa2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/master_card2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/american_express2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/rupay2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/net_banking2x.png?auto=format" />
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <h6>
                      By placing this order, you agree to Mamaearth's{" "}
                      <b>Terms & Condition</b> and <b>Privacy Policy</b>
                    </h6>
                  </div>
                </div>
              ) : paymentMethod == "nb" ? (
                <div className="netBanking-container">
                  <h4 className="payment-name">Pay Using Online Wallets</h4>
                  <div className="nb-img">
                    <div>
                      <img src="https://images.mamaearth.in/wysiwyg/hdfc-logo.png?auto=format" />
                      <h5>HDFC</h5>
                    </div>
                    <div>
                      <img src="https://images.mamaearth.in/wysiwyg/sbi-logo.png?auto=format" />
                      <h5>SBI</h5>
                    </div>
                    <div>
                      <img src="https://images.mamaearth.in/wysiwyg/icici-logo.png?auto=format" />
                      <h5>ICICI</h5>
                    </div>
                    <div>
                      <img src="https://images.mamaearth.in/wysiwyg/axis-logo.png?auto=format" />
                      <h5>AXIS</h5>
                    </div>
                  </div>
                  <button type="submit" className="place-order">
                    PLACE ORDER
                  </button>
                  <div className="security pay">
                    <img src="https://images.mamaearth.in/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" />
                    <h6>100% Payment Protection, Easy Return Policy</h6>
                  </div>
                  <div className="payment-img">
                    <img src="https://images.mamaearth.in/wysiwyg/visa2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/master_card2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/american_express2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/rupay2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/net_banking2x.png?auto=format" />
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <h6>
                      By placing this order, you agree to Mamaearth's{" "}
                      <b>Terms & Condition</b> and <b>Privacy Policy</b>
                    </h6>
                  </div>
                </div>
              ) : paymentMethod == "w" ? (
                <div className="wallet-container">
                  <h4 className="payment-name">Pay Using Online Wallets</h4>
                  <div className="wallet-img">
                    <img src="https://images.mamaearth.in/cs-static/honasa/phonepe.png" />
                    <img src="https://images.mamaearth.in/cs-static/honasa/azpay.png" />
                    <img src="https://images.mamaearth.in/cs-static/honasa/freecharge.png" />
                    <img src="https://images.mamaearth.in/cs-static/honasa/mobikwik.png" />
                  </div>
                  <button type="submit" className="place-order">
                    PLACE ORDER
                  </button>
                  <div className="security pay">
                    <img src="https://images.mamaearth.in/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" />
                    <h6>100% Payment Protection, Easy Return Policy</h6>
                  </div>
                  <div className="payment-img">
                    <img src="https://images.mamaearth.in/wysiwyg/visa2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/master_card2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/american_express2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/rupay2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/net_banking2x.png?auto=format" />
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <h6>
                      By placing this order, you agree to Mamaearth's{" "}
                      <b>Terms & Condition</b> and <b>Privacy Policy</b>
                    </h6>
                  </div>
                </div>
              ) : paymentMethod == "cod" ? (
                <div className="cod-container">
                  <h4 className="payment-name">Cash On Delivery</h4>
                  <h6>
                    Do you know you get an Extra 5% Off when you pay online? For
                    everyone’s safety, we advise paying online to limit contact
                    and help stop the spread of the virus.
                  </h6>
                  <button type="submit" className="place-order">
                    PLACE ORDER
                  </button>
                  <div className="security pay">
                    <img src="https://images.mamaearth.in/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" />
                    <h6>100% Payment Protection, Easy Return Policy</h6>
                  </div>
                  <div className="payment-img">
                    <img src="https://images.mamaearth.in/wysiwyg/visa2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/master_card2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/american_express2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/rupay2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/net_banking2x.png?auto=format" />
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <h6>
                      By placing this order, you agree to Mamaearth's{" "}
                      <b>Terms & Condition</b> and <b>Privacy Policy</b>
                    </h6>
                  </div>
                </div>
              ) : (
                <div className="upi-container">
                  <h4 className="payment-name">Pay using UPI ID</h4>
                  <h4 className="payment-name">
                    Enter UPI ID (Google Pay, BHIM, PhonePe & more)
                  </h4>
                  <input type="text" placeholder="Enter your UPI ID" />
                  <button type="submit" className="place-order">
                    PLACE ORDER
                  </button>
                  <div className="security pay">
                    <img src="https://images.mamaearth.in/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" />
                    <h6>100% Payment Protection, Easy Return Policy</h6>
                  </div>
                  <div className="payment-img">
                    <img src="https://images.mamaearth.in/wysiwyg/visa2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/master_card2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/american_express2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/rupay2x.png?auto=format" />
                    <img src="https://images.mamaearth.in/wysiwyg/net_banking2x.png?auto=format" />
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <h6>
                      By placing this order, you agree to Mamaearth's{" "}
                      <b>Terms & Condition</b> and <b>Privacy Policy</b>
                    </h6>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="order-container">
        <h4 id="h4">Order Summary</h4>
        {order_items?.order_Product?.cartItems?.map((item) => (
          <div key={item._id} className="order-item-container">
            <img src={item?.images} alt="" />
            <div className="order-info-container">
              <h5>{sliceAbout(item?.about)}</h5>
              <div className="order-price-container">
                <span>₹{item?.totalProPrice}</span>
                <h5>{`Quantity:${item?.qty}`}</h5>
              </div>
            </div>
          </div>
        ))}
        <h4 id="h4">Price Summary</h4>
        <div
          className="summary-container"
          style={{ padding: "0 .5rem 0 .5rem" }}
        >
          <div id="inner">
            <p>Order Total</p>
            <span>₹{order_items?.order_Product?.total}</span>
          </div>
          <div id="inner">
            <p>Shipping</p>
            <span>Free</span>
          </div>
          <div id="inner">
            <p>5% Discount</p>
            <span>-₹{order_items?.order_Product?.discount}</span>
          </div>
          <div id="inner">
            <p>Grand Total</p>
            <span>
              ₹
              {order_items?.order_Product?.total -
                order_items?.order_Product?.discount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
