import { React, useState } from "react";
import "./Header.css";

const Header = ({ search, setSearch }) => {
  const [type, setType] = useState("");
  return (
    <div className="header">
      <h1>Chapter Quest</h1>
      <input
        type="text"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
        placeholder="enter book title"
      ></input>
      <button
        onClick={() => {
          setSearch(type);
        }}
      >
        search
      </button>
    </div>
  );
};

export default Header;
