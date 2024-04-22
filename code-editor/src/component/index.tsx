import React from "react";
import Editor from "@monaco-editor/react";
import type { TransformedCodeEditor } from "../types";
import { Flex } from "@chakra-ui/react";

export const CodeEditorComponent = (props: TransformedCodeEditor) => {
  const { code, run } = props;

  return (
    <Flex h="50vh">
      <Editor
        theme="vs-dark"
        value={code}
        language="json"
        options={{
          formatOnPaste: true,
        }}
        onChange={(val) => {
          run(val);
        }}
      />
    </Flex>
  );
};
