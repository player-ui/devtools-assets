/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "react-flame-graph" {
  export type ChartNode = {
    name: string;
    value: number;
    children: ChartNode[];
    backgroundColor?: string;
    color?: string;
    tooltip?: string;
  };

  export type Props = {
    data: ChartData;
    disableDefaultTooltips?: boolean;
    height: number;
    width: number;
    onChange?: (chartNode: ChartNode, uid: any) => void;
    onMouseMove?: (event: React.MouseEvent, node: RawData) => void;
    onMouseOut?: (event: React.MouseEvent, node: RawData) => void;
    onMouseOver?: (event: React.MouseEvent, node: RawData) => void;
  };

  export function FlameGraph(props: Props): JSX.Element;
}
