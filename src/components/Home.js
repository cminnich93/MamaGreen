import React, { useState, useEffect } from "react";
import { HomeDesign, Button, Div, Info } from "../styles/StyleHome";
import { SearchPlants } from "../utils/helper/Search";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

function Home() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  // query is for what to search for
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (items && query) {
      const searchResults = SearchPlants(items, query);
      setFilterData(searchResults ? searchResults : []);
    }
  }, [query, items]);

  // [] means to fetch data 1 time
  // [item] means to fetch data every time item changes
  useEffect(() => {
    fetchMe();
  }, []);

  const fetchMe = () => {
    const plant = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
      },
    };
    fetch("https://house-plants2.p.rapidapi.com/all", plant)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        setItems(data);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
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
                onChange={(e) => onChangeHandler(e)}
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
        {query === "" ? (
          <div></div>
        ) : filterData.length > 0 ? (
          <Div>
            <Stack spacing="10" align="center">
              <SimpleGrid spacing={10} templateColumns="repeat(2, 650px)">
                {filterData.map((item) => {
                  const {
                    id,
                    Watering,
                    img,
                    Growth,
                    Use,
                    "Light ideal": Light_ideal,
                    "Common name": Common_name,
                    "Latin name": Latin_name,
                  } = item;
                  return (
                    <Card>
                      <CardBody>
                        <Info key={id}>
                          <img src={img} alt="" align="center" />

                          <Stack mt="5" spacing="3">
                            <CardHeader>
                              <Heading size="md">
                                <div>Plant Name: {Common_name}</div>
                              </Heading>
                              <div>Latin Name: {Latin_name}</div>
                            </CardHeader>
                            <Divider />
                            <Text align="left">
                              <div>Growth: {Growth}</div>
                              <div> Light Ideal: {Light_ideal}</div>
                              <div> Use: {Use}</div>
                            </Text>
                            <Divider />
                            <div>Watering: {Watering}</div>
                          </Stack>
                        </Info>
                      </CardBody>
                    </Card>

                    // a key property that must be put in the outermost element and must be unique.
                  );
                })}
              </SimpleGrid>
            </Stack>
          </Div>
        ) : (
          <div>
            <div>NOT FOUND</div>
          </div>
        )}
      </Div>

      {/* <Div>
        <Button>Learn</Button>
      </Div> */}
      <Div>
        <a href="https://github.com/thiratikan">
          <Button>About Us</Button>
        </a>
      </Div>
    </HomeDesign>
  );
}

export default Home;
