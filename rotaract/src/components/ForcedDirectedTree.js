import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";


am4core.useTheme(am4themes_animated);

const Tree = (props) => {
  useEffect(() => {
    let namesList = [];
    let childrenList = {
      "1": [],
      "2": [],
      "3": []
    }
    if (props.clubName.length !== 0) {
      let key = 1;
      namesList = props.clubName.data.map((club) => {
        if (key == 4) key = 1;
        childrenList[key].push({ name: club.name, value: 100 });
        key++;
      })
    }

    // Create chart
    let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

    // Create series
    let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    series.data = [{
      "name": "District 34",
      "children": childrenList['1']
    },
    {
      "name": "District 34",
      "children": childrenList['2']
    },
    {
      "name": "District 34",
      "children": childrenList['3']
    }
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

  return (
    <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
  )
}

export default Tree