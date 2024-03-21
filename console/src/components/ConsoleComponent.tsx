import React from "react";
import { TransformedConsole } from "../types";
import { ReactAsset } from "@player-ui/react";

const useConsoleProps = (props: TransformedConsole) => {
  return {
    ...props,
  } as const;
};

export const ConsoleComponent = (props: TransformedConsole) => {
  const { history } = props;
  return (
    <>
      <ReactAsset {...props} type="list">
        {history?.map((a) => (
          <ReactAsset key={a.asset.id} {...a} />
        ))}
      </ReactAsset>
      <ReactAsset {...props} type="input" />
    </>
  );
};
