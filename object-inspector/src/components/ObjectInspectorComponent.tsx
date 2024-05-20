import React, {useState} from "react";
import { Text, Input } from "@chakra-ui/react";
import { ObjectInspector as ObjectorInspectorDS } from "@devtools-ds/object-inspector";
import { ReactAsset } from "@player-ui/react";
import { ObjectInspectorAsset } from "../types";

export const ObjectInspectorComponent = (props: ObjectInspectorAsset) => {
  const { data, label, id } = props;
  const [filterCriteria, setFilterCriteria] = useState('')

  return (
    <>
      {label && <ReactAsset {...label} />}
      {data ? (
        <>
          <Input placeholder="Filter result..." value={filterCriteria} onChange={(e) => {setFilterCriteria(e.target.value)}}/>
          <ObjectorInspectorDS
            data={data}
            includePrototypes={false}
            expandLevel={7}
            id={id}
          />
        </>
      ) : (
        <Text>No data available</Text>
      )}
    </>
  );
};
