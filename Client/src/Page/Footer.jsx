import React, { useEffect, useState } from "react";
import "../Style/Footer.css";
import { allCategory } from "../Function/Category";
import { Link } from "react-router-dom";
const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await allCategory();
        setCategories(categoriesData);
      } catch (error) {
        console.log("getCategory Failed");
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="footer-container">
      <div className="delivery">
        <div className="sc-container">
          <div className="shipping">
            <img
              src="https://images.mamaearth.in/wysiwyg/mobile-truck.png"
              alt=""
            />
            <h3>Free Shipping</h3>
            <h5>On Order Above Rs. 399</h5>
          </div>
          <div className="cod">
            <img
              src="https://images.mamaearth.in/wysiwyg/mobile-wallet.png"
              alt=""
            />
            <h3>COD Available</h3>
            <h5>@ Rs. 40 Per Order</h5>
          </div>
        </div>
        <div className="query-container">
          <h3>Have Queries or Concerns?</h3>
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="payment">
        <h3>PAYMENT</h3>
        <div className="security">
          <img
            src="https://images.mamaearth.in/wysiwyg/noun_trusted_27146262x_6Ekja92.png"
            alt=""
          />
          <h3>100% Payment Protection, Easy Return Policy</h3>
        </div>
        <img src="https://images.mamaearth.in/png/web-payments.png" alt="" />
      </div>
      <div className="all-links">
        <ul>
          <h3>USEFUL LINKS</h3>
          <li><Link id="li" to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link id="li" to="/terms-and-conditions">Term & Condition</Link></li>
          <li><Link id="li" to="/terms-and-conditions-cashback">Term & Condition-Cashback</Link></li>
          {/* <li>FAQs</li>  */}
          <li><Link id="li" to="/contact-us">Contact Us</Link></li>
          <li><Link id="li" to="/about-us">About Us</Link></li>
        </ul>
        <ul>
          <h3>CATEGORIES</h3>
          {
            categories && categories?.map((cat)=>(
              <li key={cat?._id}>
                <Link id="li" to={`/product/${cat?.slug}/${cat?._id}`}>{cat?.name}</Link>
              </li>
            ))
          }
        </ul>
        <ul>
          <h3>MY ACCOUNT</h3>
          <ul>
            <li><Link id="li" to="/user">Account</Link></li>
            <li>Order</li>
            <li>Addresses</li>
          </ul>
        </ul>
        <img
          src="https://images.mamaearth.in/wysiwyg/Best-Brand500x5002x.png"
          alt=""
        />
      </div>
      <div className="social-media-container">
        <div className="social-media">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div className="app-link">
          <img
            src="https://images.mamaearth.in/wysiwyg/PLAYSTORE18Apr.png"
            alt=""
          />
          <img
            src="https://images.mamaearth.in/wysiwyg/APPSTORE18Apr.png"
            alt=""
          />
        </div>
      </div>
      <div className="last-footer">
        <h3>© 2024 Honasa Consumer Limited. All Rights Reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
