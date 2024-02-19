import React, { useState } from "react";
import "../Style/Orders.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementCartItem, incrementCartItem } from "../redux/CartSlicer";
const Orders = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  const discount = useSelector((state) => state.cart.discount);
  const increment = (product) => {
    dispatch(incrementCartItem({ product }));
  };
  const decrement = (product) => {
    dispatch(decrementCartItem({ product }));
  };
  const sliceAbout = (about) => {
    if (about?.length > 80) {
      return about?.slice(0, 80) + " ...";
    }
    return about?.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(paymentMethod);

  return (
    <div className="order-wrapper">
      <div className="payment-container">
        <form onSubmit={handleSubmit}>
          <h4>Hi Mohsin, Welcome to Mamaearth</h4>
          <h3>New Delivery Address</h3>
          <div>
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />
          </div>
          <div>
            <input type="email" placeholder="Email ID*" />
            <input type="tel" placeholder="Phone*" />
          </div>
          <div>
            <input type="text" placeholder="Pin Code*" />
            <input type="text" placeholder="City*" />
            <input type="text" placeholder="State*" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address (House No, Building, Street, Area)*"
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
                    <input type="text"  placeholder="Cart Number"/>
                  </div>
                  <div>
                    <input type="text" placeholder="MM/YY"/>
                    <input type="text" placeholder="CVV"/>
                  </div>
                  <div>
                    <input type="text" placeholder="Number Of The Cart"/>
                  </div>
                  </div>
                  <button className="place-order">PLACE ORDER</button>
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
                    <input type="checkbox" checked />
                    <h6>
                      By placing this order, you agree to Mamaearth's{" "}
                      <b>Terms & Condition</b> and <b>Privacy Policy</b>
                    </h6>
                  </div>
                </div>
              ) : paymentMethod == "nb" ? (
                <div className="netBanking-container">
                   <h4 className="payment-name">Pay Using Online Wallets</h4>
                 
                  <button className="place-order">PLACE ORDER</button>
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
                    <input type="checkbox" checked />
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
                  <button className="place-order">PLACE ORDER</button>
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
                    <input type="checkbox" checked />
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
                  <button className="place-order">PLACE ORDER</button>
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
                    <input type="checkbox" checked />
                    <h6>
                      By placing this order, you agree to Mamaearth's{" "}
                      <b>Terms & Condition</b> and <b>Privacy Policy</b>
                    </h6>
                  </div>
                </div>
              ) : (
                <div>5</div>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="order-container">
        {/* <div className="cart-wrapper">
          <h4 id="h4">Order Summary</h4>
          {cartItems?.map((item) => (
            <div key={item._id} className="cart-container">
              <img src={item?.images} alt="" />
              <div className="info-container">
                <h5>{sliceAbout(item?.about)}</h5>
                <div className="price-container">
                  <span>₹{item?.totalProPrice}</span>
                  <div className="count-container">
                    <button id="minus" onClick={() => decrement(item)}>
                      -
                    </button>
                    <h4>{item?.qty}</h4>
                    <button onClick={() => increment(item)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h4 id="h4">Price Summary</h4>
          <div className="summary-container">
            <div id="inner">
              <p>Order Total</p>
              <span>₹{total}</span>
            </div>
            <div id="inner">
              <p>Shipping</p>
              <span>Free</span>
            </div>
            <div id="inner">
              <p>5% Discount</p>
              <span>-₹{discount}</span>
            </div>
            <div id="inner">
              <p>Grand Total</p>
              <span>₹{total - discount}</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Orders;
