import React,{ useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";


am4core.useTheme(am4themes_animated);

// export default class Tree extends Component{
//   test() {
//     console.log(this.props.clubName.data)
//     let namesList = this.props.clubName.data.map(club => {
//       return {name:club.name, value: 100}
//     })

//     // Create chart
//     let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

//     // Create series
//     let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
//     series.data = [{
//       "name": "District 34",
//       "children": namesList
//     }];

//     // Set up data fields
//     // series.dataFields.value = "value";
//     // series.dataFields.name = "name";
//     // series.dataFields.children = "children";
//     // // series.dataFields.linkWith = "link";
    
//     // // Add labels
//     // series.nodes.template.label.text = "{name}";
//     // // series.nodes.template.label.valign = "bottom";
//     // series.nodes.template.label.fill = am4core.color("#000");
//     // series.nodes.template.label.dy = 10;
//     // // series.nodes.template.tooltipText = "{name}: [bold]{value}[/]";
//     // series.fontSize = 10;
//     // series.minRadius = 30;
//     // series.maxRadius = 30;

//     // Configure circles
//     // series.nodes.template.circle.disabled = true;
    
//     // Configure icons
//     // var icon = series.nodes.template.createChild(am4core.Image);
//     // icon.propertyFields.href = "image";
//     // icon.horizontalCenter = "middle";
//     // icon.verticalCenter = "middle";
//     // icon.width = 60;
//     // icon.height = 60;

//     series.dataFields.linkWith = "linkWith";
//     series.dataFields.name = "name";
//     series.dataFields.id = "name";
//     series.dataFields.value = "value";
//     series.dataFields.children = "children";

//     // series.nodes.template.tooltipText = "{name}";
//     series.nodes.template.fillOpacity = 1;

//     series.nodes.template.label.text = "{name}"
//     series.fontSize = 12;
//     series.minRadius = am4core.percent(4);
//     series.maxLevels = 2;
//     series.maxRadius = am4core.percent(6);
//     series.manyBodyStrength = -16;
//     series.nodes.template.label.hideOversized = true;
//     series.nodes.template.label.truncate = true;
    
//     // series.nodes.template.tooltipHTML = '{name}<b>{category}</b><br><a href="https://en.wikipedia.org/wiki/{category.urlEncode()}">More info</a>';
//     // series.nodes.calculateVisualCenter = true;
//     // series.nodes.template.tooltipPosition = "fixed";
//     // series.tooltip.label.interactionsEnabled = true;
//     // series.tooltip.keepTargetHover = true;

//     series.centerStrength = 0.5;
//     this.chart = chart;
//   }

//   render() {
//     if(this.props.clubName.length !== 0) {
//       this.test = this.test.bind(this)
//       this.test()
//     }
//     return (
//         <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
//     );
//   }
// }

const Tree = (props) => {
  useEffect(() => {
    let namesList = []
    if(props.clubName.length !== 0)
      namesList = props.clubName.data.map(club => {
        return {name:club.name, value: 100}
    })

    // Create chart
    let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

    // Create series
    let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    series.data = [{
      "name": "District 34",
      "children": namesList
    },
    {"name": "District 34",
    "children": namesList},
    {"name": "District 34",
    "children": namesList}
    ];

    series.dataFields.linkWith = "linkWith";
    series.dataFields.name = "name";
    series.dataFields.id = "name";
    series.dataFields.value = "value";
    series.dataFields.children = "children";
    series.nodes.template.fillOpacity = 1;
    series.nodes.template.label.text = "{name}"
    series.fontSize = 12;
    series.minRadius = am4core.percent(4);
    series.maxLevels = 2;
    series.maxRadius = am4core.percent(6);
    series.manyBodyStrength = -16;
    series.nodes.template.label.hideOversized = true;
    series.nodes.template.label.truncate = true;
    series.centerStrength = 0.5;
    // chart = chart
    return function cleanup() {
      if (chart) 
        chart.dispose();
    };
  })

  return(
    <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
  )
}

export default Tree