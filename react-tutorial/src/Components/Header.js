import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  let buttonstyle = {
    fontSize: "60px",
    // we can also style elements by using a variable in the style={} and defining it.
  };

  let articlestyle = {
    textDecoration: "underline",
  };

  return (
    <header>
      <div id="navigation">
        <Link to="/home">Home</Link>
        <Link to="/articles" style={articlestyle}>
          Articles
        </Link>
        <Link to="/suggestions">Suggestions</Link>
        <Link to="/about">About</Link>
      </div>
      <div id="search">
        <input type="search" name="Search" id="Search" />
        <button className="material-icons" style={buttonstyle}>
          search
        </button>
      </div>
    </header>

    // here we have to use Link instead of "a" (anchor) and "to" instead of "href" for stopping reload and just rendering the objects that have to be changed. 
  );
} // HEADER COMPONENT
