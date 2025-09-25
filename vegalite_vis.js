vegaEmbed('#map', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/chlropleth_map.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);

vegaEmbed('#parallel_coordinate', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/parallel_coordinate.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);
