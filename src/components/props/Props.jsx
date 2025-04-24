import "./props.css";

import { FaTruck, FaGift,  } from "react-icons/fa";
import { BsArrowClockwise } from "react-icons/bs";
import { LuSend } from "react-icons/lu";

const Props = () => {
  return (
    <div className="props">
      <div className="prop">
        <i ></i>
        <FaTruck className="bi bi-truck"/>
        Free Shipping
      </div>
      <div className="prop">
        < FaGift className="bi bi-gift"/>
        Gift Card
      </div>
      <div className="prop">
        <BsArrowClockwise className="bi bi-arrow-clockwise" />
        7 Days Return
      </div>
      <div className="prop">
         <LuSend className="bi bi-send"/>
        
        Contact Us
      </div>
    </div>
  );
};

export default Props;
