fetch("chloropleth_map.vg.json")
  .then(response => response.json())
  .then(spec => vegaEmbed("#map", spec, {actions: true}))
  .catch(console.error);
