import React, { useState, useEffect } from "react";
import { HomeDesign, Button, Div, Info } from "../styles/StyleHome";

function Home() {
  const [input, setInput] = useState("");
  const [container, setContainer] = useState([]);

  useEffect(() => {
    fetchMe();
  }, [input]);

  const fetchMe = () => {
    const plant = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6ffefb9038msh8fadf33c5debc2ap16ec85jsn87d2910a1bf1",
        "X-RapidAPI-Host": "plantk1.p.rapidapi.com",
      },
    };
    fetch("https://plantk1.p.rapidapi.com/", plant)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer(data);
      })
      .catch((err) => console.error(err));
  };

  const onChangeHandler = (e) => {
    const searchInput = e.target.value;
    const filterItems = container.filter((val) => {
      return val.CommonName.toLowerCase().includes(searchInput.toLowerCase());
    });
    setContainer(filterItems);
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
                  value={input}
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
            ["Light ideal"]: Light_ideal,
            ["Common name"]: Common_name,
            img,
          } = item;
          return (
            <Info>
              <p key={id}>
                <img src={img} alt="" />
                <p>Plant Name: {Common_name}</p>
                <p>How to water: {Watering}</p>
                <p>Sun: {Light_ideal}</p>
              </p>
            </Info>
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
