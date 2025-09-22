vegaEmbed('#map', 'https://RandalWallace.github.io/FIT3179_Assignment2/chloropleth_map.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);
