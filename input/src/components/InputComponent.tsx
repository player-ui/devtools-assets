import React, { useState, useRef } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { TransformedInput } from "../types";
import { ReactAsset } from "@player-ui/react";
import { useInputAssetProps, useFileInputAssetProps } from "./hooks";

const FileInputComponent = (props: TransformedInput) => {
  const hiddenFileInput: React.Ref<any> = useRef(null);

  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleFile = (fileName: string) => {
    setFileName(fileName);
  };

  const { id, label } = props;

  const inputProps = useFileInputAssetProps({ ...props, handleFile });

  return (
    <FormControl>
      <Button className="button-file" onClick={handleClick}>
        <FormLabel style={{ margin: 0 }}>
          {label ? <ReactAsset {...label.asset} /> : <>Select Content</>}
        </FormLabel>
      </Button>
      <Input
        id={id}
        name={id}
        {...inputProps}
        style={{ display: "none" }}
        ref={hiddenFileInput}
      />
      {fileName ? <p>Uploaded file: {fileName}</p> : null}
    </FormControl>
  );
};

export const InputComponent = (props: TransformedInput) => {
  const { validation, label, id, note, size, maxLength, placeholder, file } =
    props;

  const inputProps = useInputAssetProps(props);

  return file ? (
    <FileInputComponent {...props} />
  ) : (
    <FormControl isInvalid={Boolean(validation)}>
      {label && (
        <FormLabel htmlFor={id}>
          <ReactAsset {...label.asset} />
        </FormLabel>
      )}
      <Input
        id={id}
        {...inputProps}
        size={size}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {validation && <FormErrorMessage>{validation.message}</FormErrorMessage>}
      {note && (
        <FormHelperText>
          <ReactAsset {...note.asset} />
        </FormHelperText>
      )}
    </FormControl>
  );
};
