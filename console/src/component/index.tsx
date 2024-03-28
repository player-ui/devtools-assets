import React from "react";
import { Console } from "@devtools-ds/console";
import type { TransformedConsole } from "../types";

export const ConsoleComponent = (props: TransformedConsole) => {
  const { evaluate, history } = props;

  return <Console execute={evaluate} history={history} />;
};
