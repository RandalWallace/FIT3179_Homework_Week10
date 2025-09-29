let countryToContinent = {};

d3.csv("https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/data/Countries%20by%20continents.csv").then(data => {
  data.forEach(row => {
    countryToContinent[row.Country] = row.Continent;
  });
  console.log("Mapping loaded:", countryToContinent);
});
