import Charts from "@/components/component/chart";
import { Estatistica } from "@/components/component/estatistica";
import { Chart } from "react-google-charts";

export default function page() {
  return (
    <>
      <Estatistica />
      <Charts
      // chartType="ScatterChart"
      // data={[
      //   ["Age", "Weight"],
      //   [4, 5.5],
      //   [8, 12],
      // ]}
      // width="100%"
      // height="400px"
      // legendToggle
      />
    </>
  );
}
