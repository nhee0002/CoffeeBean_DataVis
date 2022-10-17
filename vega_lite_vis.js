// Use in final
var chart1 = "json/production_world_map.vg.json";
vegaEmbed("#production_map", chart1, {"actions": false}).then(function(result) {
}).catch(console.error);

var chart2 = "json/top_producers.vg.json";
vegaEmbed("#production_price_chart", chart2, {"actions": false}).then(function(result) {
}).catch(console.error);

var chart3 = "json/import_export.vg.json";
vegaEmbed("#import_export_chart", chart3, {"actions": false}).then(function(result) {
}).catch(console.error);

var chart4 = "json/coffee_quality.vg.json";
vegaEmbed("#coffee_quality_boxplot", chart4, {"actions": false}).then(function(result) {
}).catch(console.error);