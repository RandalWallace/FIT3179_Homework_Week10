vegaEmbed('#map', 'https://github.com/RandalWallace/FIT3179_Assignment2/blob/e76c1c8168b0242daacf05cdb0a070f43a2b8131/chlropleth_map.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);
