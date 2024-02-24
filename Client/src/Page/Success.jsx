import React from "react";
import "../Style/Common.css"
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="popup-wrapper">
      <div className="popup-container">
      <img src="http://res.cloudinary.com/mohsin45213/image/upload/v1708772101/ozy9vkiziqttu2xmgz3w.png" alt="" />
      <h3>Thank You!</h3>
      <h4>Your payment was successful</h4>
      <h5>Thank you for payment. we will be in with more detail shortly</h5>
      <Link to="/"><button>Done</button></Link>
      </div>
    </div>
  );
};

export default Success;
