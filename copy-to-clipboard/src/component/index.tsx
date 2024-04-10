import { ReactAsset } from "@player-ui/react";
import React, { useCallback } from "react";
import type { TransformedCopyToClipboard } from "../types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useToast, Button } from "@chakra-ui/react";

export const CopyToClipboardComponent = (props: TransformedCopyToClipboard) => {
  const { label, data } = props;
  const toast = useToast();
  const handleCopy = useCallback(
    (_: string, result: boolean) => {
      if (result) {
        toast({
          title: "Data copied to clipboard",
          description: "Data copied successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed to copy",
          description: "Failed to copy data to clipboard",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
    [toast]
  );

  return (
    <CopyToClipboard text={data} onCopy={handleCopy}>
      <Button>{label && <ReactAsset {...label.asset} />}</Button>
    </CopyToClipboard>
  );
};
