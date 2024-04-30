import React from "react";
import type { TransformedRadioGroup } from "../types";

/**
 * Hook to convert the data we get from the Player Content into the properties our component expects:
 */
const useRadioGroupProps = (props: TransformedRadioGroup) => {
  // Translate the properties we get from the Player Content (DSL > JSON > transformer)
  // into what the elements that compose your component expect (platform-specific, for
  // platform-agnostic transformations, see the transformer):
  return {
    ...props,
  } as const;
};

export const RadioGroupComponent = (props: TransformedRadioGroup) => {
  const { children, ...rest } = useRadioGroupProps(props);

  // Replace with the Elements that render your component:
  return <div {...rest}>{children}</div>;
};
