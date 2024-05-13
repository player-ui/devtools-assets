import React from "react";
import { FlameGraph } from "react-flame-graph";
import { useFlameGraphProps } from "../hooks";
import type { TransformedFlameGraph } from "../types";

export const FlameGraphComponent = (props: TransformedFlameGraph) => {
  const transformedProps = useFlameGraphProps(props);

  return <FlameGraph {...transformedProps} />;
};
