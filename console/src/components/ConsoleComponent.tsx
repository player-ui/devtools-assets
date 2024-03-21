import React from "react";
import { TransformedConsole } from "../types";
import { ReactAsset } from "@player-ui/react";

const useConsoleProps = (props: TransformedConsole) => {
  return {
    ...props,
    value: props.expression,
  } as const;
};

export const ConsoleComponent = (props: TransformedConsole) => {
  const { history } = useConsoleProps(props);

  return (
    <>
      <ReactAsset asset={{ type: "list", id: "some" }}>
        {history?.map(({ expression, result }) => (
          <>
            <ReactAsset key={expression.asset.id} {...expression} />
            {result && <ReactAsset key={result.asset.id} {...result} />}
          </>
        ))}
      </ReactAsset>
      <ReactAsset {...props} type="input" />
    </>
  );
};
