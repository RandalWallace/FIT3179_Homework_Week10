vegaEmbed('#map', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/chlropleth_map.vg.json', {actions: true})
    .then(result => {
        console.log("Map loaded successfully!");
    }).catch(console.error);

vegaEmbed('#parallel_coordinate', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/parallel_coordinate.vg.json', {
    actions: {
        export: true,
        source: false,
        compiled: false,
        editor: true
    }
})
.then(result => {
    console.log("Parallel coordinate chart loaded successfully!");
}).catch(console.error);
