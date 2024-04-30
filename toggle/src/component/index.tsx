import React from "react";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";
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
  const { value, label, id, setCheck } = useToggleProps(props);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCheck(e.target.checked);
  };

  // Replace with the Elements that render your component:
  return (
    <FormControl display="flex" alignItems="center">
      {label && (
        <FormLabel htmlFor={id}>
          <ReactAsset {...label.asset} />
        </FormLabel>
      )}
      <Switch id={id} onChange={onChange} />
    </FormControl>
  );
};
