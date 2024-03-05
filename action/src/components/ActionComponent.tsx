import React, { useCallback, useState } from "react";

import { Button, Text } from "@chakra-ui/react";
import { ActionAsset } from "../types";
/**
 *   Action button renders button or a link
 **/
export const ActionComponent = (props: ActionAsset) => {
  const {
    value,
    ButtonLeft,
    ButtonRight,
    Variant,
    isLoading,
    onClick,
    id,
    automationId,
  } = props;

  return (
    <div id={automationId ?? id}>
      <Button
        onClick={onClick}
        leftIcon={ButtonLeft}
        rightIcon={ButtonRight}
        variant={Variant}
        isLoading={isLoading}
      >
        {value}
      </Button>
    </div>
  );
};
