import React from "react";
import type { TransformedToggle } from "../types";

/**
 * Hook to convert the data we get from the Player Content into the properties our component expects:
 */
const useToggleProps = (props: TransformedToggle) => {
  // Translate the properties we get from the Player Content (DSL > JSON > transformer)
  // into what the elements that compose your component expect (platform-specific, for
  // platform-agnostic transformations, see the transformer):
  return {
    ...props,
  } as const;
};

export const ToggleComponent = (props: TransformedToggle) => {
  const { children, ...rest } = useToggleProps(props);

  // Replace with the Elements that render your component:
  return <div {...rest}>{children}</div>;
};
