import type { Props } from "react-flame-graph";
import type { TransformedFlameGraph } from "../types";

const transformData = (data: TransformedFlameGraph["data"]): Props["data"] => ({
  name: data?.name || "root",
  value: data?.value || 0,
  ...(data?.tooltip && { tooltip: data.tooltip }),
  children: data?.children?.map(transformData) || [],
});

/**
 * Hook to translate the properties we get from the Player Content (DSL > JSON > transformer)
 * into what the FlameGraph component expects.
 */
export const useFlameGraphProps = (props: TransformedFlameGraph): Props => ({
  ...props,
  height: props.height || 500,
  width: props.width || 500,
  data: transformData(props.data),
});
