import React, { useState } from "react";
import { Text, Input } from "@chakra-ui/react";
import { ObjectInspector as ObjectorInspectorDS } from "@devtools-ds/object-inspector";
import { ReactAsset } from "@player-ui/react";
import { DataModel } from "@player-ui/types";
import { ObjectInspectorAsset } from "../types";

const FilterResults = (props: ObjectInspectorAsset) => {
  const { data } = props;

  const [filterCriteria, setFilterCriteria] = useState("");
  const [resultData, setResultData] = useState("Path result will display here");

  const getPathvalue = (object: DataModel, path: string) => {
    const keys = path.split(".");
    let result: any = object;
    for (const key of keys) {
      const arrayIndex = key.search(/\[\d+\]$/);

      if (!result[key] && arrayIndex === -1)
        return "No result for the given path";

      // If key has a numeric index, e.g. for Multi-copy and/or array values.
      if (arrayIndex > -1) {
        const subkey = key.substring(0, arrayIndex);
        const subIndexMatch = key.match(/(?<=\[)\d+(?=\])/);

        result = result[subkey][subIndexMatch ? subIndexMatch[0] : 0];
        if (!result) return "No result for the given index";
      } else {
        result = result[key];
      }
    }
    return result;
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterCriteria(e.target.value);

    const result = getPathvalue(data as DataModel, e.target.value);
    setResultData(result);
  };

  return (
    <>
      <Input
        placeholder="Search path..."
        value={filterCriteria}
        onChange={onChangeHandler}
      />
      {/* <ObjectorInspectorDS
        data={resultData}
        includePrototypes={false}
        expandLevel={7}
      /> */}
      <Text>{JSON.stringify(resultData)}</Text>
    </>
  );
};

export const ObjectInspectorComponent = (props: ObjectInspectorAsset) => {
  const { data, label, filter, id } = props;

  return (
    <>
      {label && <ReactAsset {...label} />}
      {data ? (
        <>
          {filter && <FilterResults {...props} style={{ margin: "16px" }} />}
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
