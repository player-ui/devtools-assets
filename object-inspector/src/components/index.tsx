import React from "react";
import Text from "@devtools-ui/text";
import { ObjectInspector as ObjectorInspectorDS } from "@devtools-ds/object-inspector";
import { ReactAsset } from "@player-ui/react";

import styles from "./objectInspector.module.css";
import { ObjectInspectorAsset } from "../types";

export const ObjectInspectorComponent = (props: ObjectInspectorAsset) => {
  const { id, data, label } = props;

  return (
    <div id={id} className={styles["data-panel-wrapper"]}>
      {label && <ReactAsset {...label} />}
      {data ? (
        <ObjectorInspectorDS
          data={data}
          includePrototypes={false}
          expandLevel={7}
        />
      ) : (
        <Text>No data available</Text>
      )}
    </div>
  );
};
