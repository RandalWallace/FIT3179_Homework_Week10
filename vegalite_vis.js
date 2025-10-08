vegaEmbed('#map', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/chlropleth_map.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);

vegaEmbed('#parallel_coordinate', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/parallel_coordinate.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);

vegaEmbed('#bar_chart', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/bar_chart.vg.json', {actions: false})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);

vegaEmbed('#bubble_chart1', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/bubble_plot1.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);

vegaEmbed('#bubble_chart2', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/bubble_plot2.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);

vegaEmbed('#radar_chart', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/radar_chart.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);

vegaEmbed('#bump_chart', 'https://raw.githubusercontent.com/RandalWallace/FIT3179_Assignment2/refs/heads/main/bump_chart.vg.json', {actions: true})
    .then(result => {
    console.log("Vega-Lite chart loaded from external file!");
    }).catch(console.error);
