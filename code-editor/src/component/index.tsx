import type { TransformedCodeEditor } from "../types";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

const extensions = [json()];

export const CodeEditorComponent = (props: TransformedCodeEditor) => {
  const { code, run } = props;

  return (
    <CodeMirror
      value={code}
      minHeight="300px"
      theme="dark"
      onChange={run}
      extensions={extensions}
    />
  );
};
