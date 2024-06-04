import React, { useState } from "react";
import { Text, Input } from "@chakra-ui/react";
import { ObjectInspector as ObjectorInspectorDS } from "@devtools-ds/object-inspector";
import { ReactAsset } from "@player-ui/react";
import { Flow } from "@player-ui/types";
import { ObjectInspectorAsset } from "../types";

const FilterResults = (props: ObjectInspectorAsset) => {
  const { data, id } = props;

  const [filterCriteria, setFilterCriteria] = useState("");
  const [resultData, setResultData] = useState(data);

  const isObject = (value: any): boolean => {
    return (
      value != null &&
      (value.constructor === Object ||
        (!value.constructor && typeof value === "object") ||
        Array.isArray(value))
    );
  };

  const getPathvalue = (object: Flow, path: string) => {
    const keys = path.split(".");
    let result: any = object;
    for (const key of keys) {
      const arrayIndex = key.search(/\[\d+\]$/);

      if (!result[key] && arrayIndex === -1) return 0;

      // If key has a numeric index, e.g. for Multi-copy and/or array values.
      if (arrayIndex > -1) {
        const subkey = key.substring(0, arrayIndex);
        const subIndexMatch = key.match(/(?<=\[)\d+(?=\])/);

        result = result[subkey][subIndexMatch ? subIndexMatch[0] : 0];
        if (!result) return -1;
      } else {
        result = result[key];
      }
    }
    return result;
  };

  const getResultTag = (result: any) => {
    if (result === -1) {
      return "No result for the given index";
    } else if (result === 0) {
      return "No result for the given path";
    } else if (!isObject(result)) {
      return result;
    }
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterCriteria(e.target.value);

    const result = getPathvalue(data as Flow, e.target.value);
    setResultData(e.target.value.length ? result : data);
  };

  return (
    <>
      <Input
        placeholder="Search path..."
        value={filterCriteria}
        onChange={onChangeHandler}
      />
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <Text style={{ padding: "0 16px" }}>{getResultTag(resultData)}</Text>
        {isObject(resultData) ? (
          <ObjectorInspectorDS
            data={resultData as Flow}
            includePrototypes={false}
            expandLevel={3}
            id={`filter-${id}`}
          />
        ) : null}
      </div>
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
          {filter ? (
            <FilterResults {...props} style={{ margin: "16px" }} />
          ) : (
            <ObjectorInspectorDS
              data={data}
              includePrototypes={false}
              expandLevel={7}
              id={id}
            />
          )}
        </>
      ) : (
        <Text>No data available</Text>
      )}
    </>
  );
};
