<<<<<<< HEAD
import React from "react";
import { TextComponent } from "@devtools-ui/text";
import { ObjectInspector as ObjectorInspectorDS } from "@devtools-ds/object-inspector";
=======
import React, { useCallback, useState } from "react";
import { Asset, AssetWrapper } from "@player-ui/types";
>>>>>>> 1aaca87 (WIP)
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
<<<<<<< HEAD
    <div id={id} className={styles["data-panel-wrapper"]}>
      {label && <ReactAsset {...label} />}
      {data ? (
        <ObjectorInspectorDS
          data={data}
          includePrototypes={false}
          expandLevel={7}
        />
      ) : (
        <TextComponent value="No data available" />
      )}
    </div>
=======
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
>>>>>>> 1aaca87 (WIP)
  );
};
