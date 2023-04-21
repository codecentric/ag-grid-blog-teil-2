import React, { FC, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { getData } from "./teslaData";

const LineChart: FC = () => {
  const teslaData = getData();
  const [pieChartOptions] = useState({
    autoSize: true,
    title: {
      text: "Tesla Stock Price",
    },

    data: teslaData,
    series: [
      {
        xKey: "date",
        yKey: "price",
        tooltip: {
          renderer: ({
            xKey,
            yKey,
            datum,
          }: {
            xKey: string;
            yKey: string;
            datum: any;
          }) => {
            return {
              title: xKey,
              content: `${yKey}: ${datum[yKey]}`,
            };
          },
        },
        marker: { enabled: true, shape: "diamond", size: 7 },
        strokeWidth: 2.0,
      },
    ],
    navigator: {
      enabled: true,
    },
  } as AgChartOptions);

  return (
    <div className="chart-div" style={{ height: 800, width: 1600 }}>
      <AgChartsReact options={pieChartOptions} />
    </div>
  );
};

export default LineChart;
