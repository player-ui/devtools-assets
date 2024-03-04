import React, { useCallback, useState } from "react";
import { Asset, AssetWrapper } from "@player-ui/types";
import { ReactAsset } from "@player-ui/react";
import { Button } from "@chakra-ui/react";
import { ActionAsset } from "../types";
/**
 *   Action button renders button or a link
 **/
export const Action = (props: ActionAsset) => {
  const {
    value,
    label,
    ButtonLeft,
    ButtonRight,
    Variant,
    isLoading,
    onClick,
    className,
    id,
    automationId,
  } = props;

  const labelComponent = label && <ReactAsset {...label} />;

  return (
    <Button
      className={className}
      data-automation-id={automationId || id}
      ButtonLeft={ButtonLeft}
      ButtonRight={ButtonRight}
      Variant={Variant}
      isLoading={isLoading}
      id={id}
      onClick={onClick ?? onClick()}
    >
      {labelComponent}
    </Button>
  );
};
