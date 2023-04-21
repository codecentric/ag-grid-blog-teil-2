import React, { useState, FC } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";

const BarChart: FC = () => {
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

  const [barChartOptions] = useState({
    autoSize: true,
    data: barPieData,
    theme: {
      overrides: {
        bar: {
          series: {
            strokeWidth: 0,
          },
        },
      },
    },
    title: {
      text: "Second Genres for Action Movies According to IMDB",
      fontSize: 18,
    },
    subtitle: {
      text: "Without genres with less 100 entries",
    },
    series: [
      {
        type: "bar",
        xKey: "genre",
        yKey: "amount",
      },
    ],
    axes: [
      {
        type: "category",
        position: "left",
      },
      {
        type: "number",
        position: "bottom",
        title: {
          enabled: true,
          text: "How often",
        },
      },
    ],
    legend: {
      enabled: false,
    },
  } as AgChartOptions);

  return (
    <div className="chart-div" style={{ height: 800, width: 1600 }}>
      <AgChartsReact options={barChartOptions} />
    </div>
  );
};

export default BarChart;
