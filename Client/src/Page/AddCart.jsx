import "../Style/AddCart.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementCartItem, incrementCartItem, orderInfo } from "../redux/CartSlicer";
import { Link } from "react-router-dom";
const AddCart = ({ slide, setSlide }) => {
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

  const handleOrder = ()=>{
    dispatch(orderInfo({product:{cartItems,total,discount}}))
  }

  return (
    <div className={`container ${slide ? "open" : ""}`}>
      <div className="head-container">
        <i
          onClick={() => setSlide(false)}
          className="fa-solid fa-arrow-left"  
        ></i>
        <h3>My Cart</h3>
      </div>
      {cartItems.length !== 0 && (
        <>
          <div className="cart-wrapper">
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
            <div  className="summary-container">
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
                <span>₹{total-discount}</span>
              </div>
            </div>
          </div>
          <div className="total-cartItems">
            <div className="total-count-container">
              <i style={{color:"rgb(28,28,28)"}} className="fa-solid fa-cart-shopping"></i>
              <div className="total-count">
                <h5>{cartItems.length} Items</h5>
                <h5 style={{color:"rgb(68,68,68)"}}>₹{total-discount}</h5>
              </div>
            </div>
            <Link to="/checkout">
            <button className="btnContinue" onClick={handleOrder}>CONTINUE</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AddCart;
