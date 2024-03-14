import React from "react";
import { Button } from "@chakra-ui/react";
import type { TransformedAction } from "../types";
import { ReactAsset } from "@player-ui/react";

const useActionPros = (props: TransformedAction) => {
  return {
    ...(props.label ? { children: <ReactAsset {...props.label.asset} /> } : {}),
    ...(props.icon
      ? {
          [props.metaData?.iconPosition === "left" ? "leftIcon" : "rightIcon"]:
            <ReactAsset {...props.icon.asset} />,
        }
      : {}),
    ...(props.run ? { onClick: props.run } : {}),
    ...(props.metaData?.variant ? { variant: props.metaData.variant } : {}),
    ...(props.metaData?.isLoading
      ? { isLoading: props.metaData.isLoading }
      : {}),
  } as const;
};

export const ActionComponent = (props: TransformedAction) => {
  const { children, ...buttonProps } = useActionPros(props);

  return <Button {...buttonProps}>{children}</Button>;
};
