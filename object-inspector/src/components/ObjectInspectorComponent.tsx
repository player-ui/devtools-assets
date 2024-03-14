import React from "react";
import { Text } from "@chakra-ui/react";
import { ObjectInspector as ObjectorInspectorDS } from "@devtools-ds/object-inspector";
import { ReactAsset } from "@player-ui/react";
import { ObjectInspectorAsset } from "../types";

export const ObjectInspectorComponent = (props: ObjectInspectorAsset) => {
  const { data, label, id } = props;

  return (
    <>
      {label && <ReactAsset {...label} />}
      {data ? (
        <ObjectorInspectorDS
          data={data}
          includePrototypes={false}
          expandLevel={7}
          id={id}
        />
      ) : (
        <Text>No data available</Text>
      )}
    </>
  );
};
