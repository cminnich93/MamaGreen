import React, { useState, useEffect } from "react";
import { HomeDesign, Button, Div } from "../styles/StyleHome";

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
        "X-RapidAPI-Host": "house-plants.p.rapidapi.com",
      },
    };

    fetch("https://house-plants.p.rapidapi.com/all", plant)
      .then((response) => {
        return response.json();
      })
      .then((response) => console.log(response))
      // .then((data) => {
      //   setContainer(data);
      // })

      .catch((err) => console.error(err));
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const searchButtonSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <HomeDesign>
      <div>
        <img src="./images/cactus.png" alt="cactus" />
        <Div>
          <div className="container">
            <div className="container__item">
              <form className="form" onSubmit={searchButtonSubmit}>
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
        {/* {container.map((item) => {
          return <p>{item}</p>;
        })} */}

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
