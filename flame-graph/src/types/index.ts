import type { Asset } from "@player-ui/types";

export type ProfilerNode = {
  /** hook name */
  name: string;
  /* startTime of the hook */
  startTime?: number;
  /** endTime of the hook */
  endTime?: number;
  /** duration of hook resolution times in ms */
  value?: number;
  /** tooltip to be shown on hover */
  tooltip?: string;
  /** subhook profiler nodes */
  children: ProfilerNode[];
};

export interface FlameGraphAsset extends Asset<"flame-graph"> {
  /** Dot separated string Representation of a path within the data-model */
  binding?: string;
  /** height of the flame graph */
  height?: number;
  /** width of the flame graph */
  width?: number;
}

/** A stateful instance of the asset */
export interface TransformedFlameGraph extends FlameGraphAsset {
  // The result of the transformation (transform/index.ts)
  data?: ProfilerNode;
}
