import React from "react";
import { TextComponent } from "@devtools-ui/text";
import { ObjectInspector as ObjectorInspectorDS } from "@devtools-ds/object-inspector";
import { ReactAsset } from "@player-ui/react";

import styles from "./objectInspector.module.css";
import { ObjectInspectorAsset } from "../types";

export const ObjectInspectorComponent = (props: ObjectInspectorAsset) => {
  const { data, label } = props;

  return (
    <div className={styles["data-panel-wrapper"]}>
      {label && <ReactAsset {...label} />}
      {data ? (
        <ObjectorInspectorDS
          data={data}
          includePrototypes={false}
          expandLevel={7}
        />
      ) : (
        <TextComponent value="No data available" id={""} type={"text"} />
      )}
    </div>
  );
};
