import React from "react";

function FetchPlant() {
  const plant = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6ffefb9038msh8fadf33c5debc2ap16ec85jsn87d2910a1bf1",
      "X-RapidAPI-Host": "house-plants.p.rapidapi.com",
    },
  };

  fetch("https://house-plants.p.rapidapi.com/all", plant)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

export default FetchPlant;
