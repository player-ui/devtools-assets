import React from "react";
import { Input } from "@chakra-ui/react";
import { TransformedInput } from "../types";
import { ReactAsset } from "@player-ui/react";

const useInputProps = (props: TransformedInput) => {
  return {
    ...(props.label ? { children: <ReactAsset {...props.label.asset} /> } : {}),
  } as const;
};

export const InputComponent = (props: TransformedInput) => {
  const { children, ...rest } = useInputProps(props);
  return <Input {...rest} />;
};
