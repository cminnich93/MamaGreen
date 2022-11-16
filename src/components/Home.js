import React, { useState, useEffect } from "react";
import { HomeDesign, Button, Div, Info } from "../styles/StyleHome";

function Home() {
  const [search, setSearch] = useState("");
  const [container, setContainer] = useState([]);

  useEffect(() => {
    fetchMe();
  }, [search]);

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
        setContainer(data);
      })
      .catch((err) => console.error(err));
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <HomeDesign>
      <div>
        <img src="./images/cactus.png" alt="cactus" />
        <Div>
          <div className="container">
            <div className="container__item">
              <form className="form" onSubmit={handleSubmit}>
                <input
                  className="form__field"
                  type="text"
                  placeholder="Enter Plant Name Here..."
                  value={search}
                  onChange={onChangeHandler}
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

        {container.map((item) => {
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
              <div>Latim Name: {Latin_name}</div>
              <div>Watering: {Watering}</div>
              <div>Growth: {Growth}</div>
              <div>Light Ideal: {Light_ideal}</div>
              <div>Use: {Use}</div>
            </Info>

            // a key property that must be put in the outermost element and must be unique.
          );
        })}

        <Div>
          <Button>Learn</Button>
        </Div>
        <Div>
          <Button>About Us</Button>
        </Div>
      </div>
    </HomeDesign>
  );
}

export default Home;
