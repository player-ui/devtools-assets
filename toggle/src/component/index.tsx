import React from "react";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";
import type { TransformedToggle } from "../types";

const useToggleProps = (props: TransformedToggle) => {
  return {
    ...props,
  } as const;
};

export const ToggleComponent = (props: TransformedToggle) => {
  const { value, label, id, setCheck } = useToggleProps(props);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCheck(e.target.checked);
  };

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
