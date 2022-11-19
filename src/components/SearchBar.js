import React, { useState } from "react";
import { Div, Info } from "../styles/StyleHome";

function SearchBar() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [filterData, setFilterData] = useState([]);
  return (
    <Div>
      {filterData.length != 0 && (
        <div>
          {items.map((item) => {
            const {
              id,
              Watering,
              img,
              Growth,
              Use,
              ["Light ideal"]: Light_ideal,
              ["Common name"]: Common_name,
              ["Latin name"]: Latin_name,
            } = item;
            return (
              <Info key={id}>
                <img src={img} alt="" />
                <div>Plant Name: {Common_name}</div>
                <div>Latin Name: {Latin_name}</div>
                <div>Watering: {Watering}</div>
                <div>Growth: {Growth}</div>
                <div>Light Ideal: {Light_ideal}</div>
                <div>Use: {Use}</div>
              </Info>
              // a key property that must be put in the outermost element and must be unique.
            );
          })}
        </div>
      )}
    </Div>
  );
}

export default SearchBar;
