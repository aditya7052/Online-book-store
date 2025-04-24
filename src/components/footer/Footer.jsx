import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <p>Follow us on social media</p>
        <ul>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTelegram />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
      <div className="lower-footer">
        <div className="links section">
          <h3>Usefull Links</h3>
          <ul style={{ color: "white", listStyle: "none" }}>
            <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
            <li><Link to="/authors" style={{ color: "white", textDecoration: "none" }}>Authors</Link></li>
            <li><Link to="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link></li>
            <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link></li>
          </ul>

        </div>
        <div className="contact section">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <p>Phagwara, Punjab</p>
            </li>
            <li>
              <p>7004429452</p>
            </li>
            <li>
              <p>adityakumarssm16@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="about section">
          <h3>About</h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          delectus eaque. Eveniet exercitationem ad ullam vitae voluptatem nulla
          expedita quibusdam sapiente repellat sunt, vero nemo, rem tempore
          beatae placeat corrupti.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
