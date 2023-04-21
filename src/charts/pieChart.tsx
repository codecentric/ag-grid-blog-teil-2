import React, { FC, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";

const PieChart: FC = () => {
  const barPieData = [
    { genre: "Adventure", amount: 8537 },
    { genre: "Fantasy", amount: 2173 },
    { genre: "Drama", amount: 15365 },
    { genre: "Thriller", amount: 5966 },
    { genre: "Comedy", amount: 7336 },
    { genre: "Crime", amount: 9217 },
    { genre: "Mystery", amount: 957 },
    { genre: "Romance", amount: 2239 },
    { genre: "War", amount: 1079 },
    { genre: "Sci-Fi", amount: 2661 },
    { genre: "History", amount: 829 },
    { genre: "Animation", amount: 1281 },
    { genre: "Biography", amount: 473 },
    { genre: "Horror", amount: 2183 },
    { genre: "Family", amount: 633 },
    { genre: "Western", amount: 709 },
    { genre: "Sport", amount: 329 },
    { genre: "Music", amount: 225 },
    { genre: " Musical", amount: 227 },
  ];

  const numFormatter = new Intl.NumberFormat("de-DE");
  const total = barPieData.reduce((sum, d) => sum + d["amount"], 0);
  const [pieChartOptions] = useState({
    container: document.getElementById("myChart"),
    autoSize: true,
    data: barPieData,
    title: {
      text: "Second Genres for Action Movies According to IMDB",
      fontSize: 18,
    },
    subtitle: {
      text: "Without genres with less 100 entries",
    },
    series: [
      {
        type: "pie",
        calloutLabelKey: "genre",
        angleKey: "amount",
        sectorLabelKey: "amount",
        calloutLabel: {
          enabled: true,
        },
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
          formatter: ({
            datum,
            sectorLabelKey,
          }: {
            datum: any;
            sectorLabelKey: string;
          }) => {
            const value = datum[sectorLabelKey];
            return numFormatter.format(value);
          },
        },
        title: {
          text: "amount",
        },
        fills: [
          "#fb7451",
          "#f4b944",
          "#57cc8b",
          "#49afda",
          "#3988dc",
          "#72508c",
          "#b499b5",
          "#b7b5ba",
        ],
        innerRadiusRatio: 0.5,
        innerLabels: [
          {
            text: numFormatter.format(total),
            fontSize: 24,
            fontWeight: "bold",
          },
          {
            text: "Total",
            fontSize: 16,
          },
        ],
        highlightStyle: {
          item: {
            fillOpacity: 0,
            stroke: "#535455",
            strokeWidth: 1,
          },
        },
        tooltip: {
          renderer: ({
            datum,
            calloutLabelKey,
            title,
            sectorLabelKey,
          }: {
            datum: any;
            calloutLabelKey: string;
            title: string;
            sectorLabelKey: string;
          }) => {
            return {
              title,
              content: `${datum[calloutLabelKey]}: ${numFormatter.format(
                datum[sectorLabelKey]
              )}`,
            };
          },
        },
      },
    ],
  } as AgChartOptions);

  return (
    <div className="chart-div" style={{ height: 800, width: 1600 }}>
      <AgChartsReact options={pieChartOptions} />
    </div>
  );
};

export default PieChart;
