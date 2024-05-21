import React, { useState } from "react";
import { Text, Input } from "@chakra-ui/react";
import { ObjectInspector as ObjectorInspectorDS } from "@devtools-ds/object-inspector";
import { ReactAsset, DataModel } from "@player-ui/react";
import { ObjectInspectorAsset } from "../types";

const FilterResults = (props: ObjectInspectorAsset) => {
  const { data } = props;

  const [filterCriteria, setFilterCriteria] = useState("");
  const [result, setResult] = useState<object>(data || {});

  const findValue = () => {
    for (
      let index = 0,
        path: string[] = filterCriteria.split("."),
        len = path.length;
      index < len;
      index++
    ) {
      // setResult(result[path[index]]);
    }
    return result;
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterCriteria(e.target.value);
  };

  return (
    <Input
      placeholder="Search path..."
      value={filterCriteria}
      onChange={onChangeHandler}
    />
  );
};

export const ObjectInspectorComponent = (props: ObjectInspectorAsset) => {
  const { data, label, filter, id } = props;

  return (
    <>
      {label && <ReactAsset {...label} />}
      {data ? (
        <>
          {filter && <FilterResults {...props} />}
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
