import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { books } from "../../data/books";
import { FaBookOpen } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const MidHeader = () => {
  const itemNumber = Object.keys(
    useSelector((state) => state.itemShoped.items)
  ).length;
  const [searchBooks, setSearchBooks] = useState("");
  const list = books
    .filter((book) => book.title.toLowerCase().includes(searchBooks))
    .map((e) => <Link to={`./books/${e.id - 1}`}>{e.title}</Link>);

  // make the search result disappear when changing the route
  const location = useLocation();
  useEffect(() => {
    setSearchBooks("");
  }, [location]);

  return (
    <div className="mid-header header-section">
      <Link to="./">
        <div className="logo" style={{alignItems:"center" ,color:"white"}} >

          B<FaBookOpen className="bi bi-book" color="white" />kyy
        </div>
      </Link>
      <div className="search-box">
        <input
          type="search"
          placeholder="Search for books.."
          value={searchBooks}
          onChange={(e) => setSearchBooks(e.target.value)}
        />
        <IoSearchSharp className="bi bi-search" style={{ color: "black", fontSize: "24px" }}/>
        {searchBooks && <div className="searched-items">{list}</div>}
      </div>
      <Link to="./cart" className="cart-link">
        {itemNumber !== 0 && (
          <div className="items">{itemNumber <= 9 ? itemNumber : "+9"}</div>
        )}
        <FaShoppingCart className="bi bi-cart2" color="white"/>
      </Link>
    </div>
  );
};

export default MidHeader;
