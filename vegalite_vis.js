vegaEmbed('#map', 'https://github.com/RandalWallace/FIT3179_Assignment2/blob/d1f48cfe99f37b86ca4d9852f0b8e3a8e9241ff1/chlropleth_map.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);
