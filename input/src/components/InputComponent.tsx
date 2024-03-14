import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { TransformedInput } from "../types";
import { ReactAsset } from "@player-ui/react";
import { useInputAssetProps } from "./hooks";

const useInputProps = (props: TransformedInput) => {
  return {
    ...(props.label ? { children: <ReactAsset {...props.label.asset} /> } : {}),
    ...(props.note ? { note: <ReactAsset {...props.note.asset} /> } : {}),
    ...useInputAssetProps(props),
  } as const;
};

export const InputComponent = (props: TransformedInput) => {
  const { validation, label, id, note, ...rest } = props;

  const inputProps = useInputProps(props);

  return (
    <FormControl isInvalid={Boolean(validation)}>
      {label && (
        <FormLabel htmlFor={id}>
          <ReactAsset {...label} />
        </FormLabel>
      )}
      <Input id={id} {...inputProps} />
      {validation && <FormErrorMessage>{validation.message}</FormErrorMessage>}
      {note && (
        <FormHelperText>
          <ReactAsset {...note} />
        </FormHelperText>
      )}
    </FormControl>
  );
};
