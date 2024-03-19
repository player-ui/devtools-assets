import React from "react";
import { Console } from "@devtools-ds/console";
import { TransformedConsole } from "../types";
// import { ReactAsset } from "@player-ui/react";

export const ConsoleComponent = (props: TransformedConsole) => {
  return <Console {...props} />;
};
