export const SearchPlants = (filterItems, searchWord) => {
  if (filterItems && filterItems.length > 0) {
    // filter out plants that match the searchWord
    const newPlantArray = filterItems.filter((plant) => {
      // form the plant obj we only take Common_name & Latin_name
      const { "Common name": Common_name, "Latin name": Latin_name } = plant;

      // Create a regex object (used to filter)
      // Make a line of regex code that finds data with searchWord in the string
      let regex = new RegExp(`W*(${searchWord})W*`, "i");

      // NOT NULL, null is false, null means plant with name was not found
      // uses regex to match latin word to our searched word
      const latinNameMatch = regex.test(Latin_name);

      // check array of names, see if any equal our search
      // if yes return true,
      // if no return false
      const commonName = Common_name?.find((name) => {
        return regex.test(name);
      });

      // check latin name, if match return that plant
      if (latinNameMatch) return true;

      // true or false
      if (commonName) return true;

      // take no plant
      return false;
    });
    console.log("RETURNING PLANTS:", newPlantArray.length);

    return newPlantArray;
  }
};
