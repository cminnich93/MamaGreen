import React, { useState, useEffect, useMemo } from "react";
import { HomeDesign, Button, Div, Info } from "../styles/StyleHome";

function Home() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  // query is for what to search for
  const [filterData, setFilterData] = useState([]);

  const filterItems = useMemo(() => {
    // return an array of item that you return
    return items.map((allName) => {
      const {
        // spread operator (GIVE ME ALL THE ITEMS)...
        ["Common name"]: Common_name,
        ["Latin name"]: Latin_name,
      } = allName;

      return { Common_name }, { Latin_name };

      // return item.toLowercase().includes(query.toLowerCase());
    });
  }, [items, query]);

  // [] means to fetch data 1 time
  // [item] means to fetch data every time item changes
  useEffect(() => {
    fetchMe();
  }, []);

  const fetchMe = () => {
    const plant = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6ffefb9038msh8fadf33c5debc2ap16ec85jsn87d2910a1bf1",
        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
      },
    };
    fetch("https://house-plants2.p.rapidapi.com/", plant)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.error(err));
  };

  // const onChangeHandler =

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <HomeDesign>
      <img src="./images/cactus.png" alt="cactus" />
      <Div>
        <div className="search">
          <div className="search__item">
            <form className="form" onSubmit={handleSubmit}>
              <input
                className="form__field"
                type="text"
                placeholder="Enter Plant Name Here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn--primary btn--inside uppercase"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </Div>

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

      <Div>
        <Button>Learn</Button>
      </Div>
      <Div>
        <Button>About Us</Button>
      </Div>
    </HomeDesign>
  );
}

export default Home;
