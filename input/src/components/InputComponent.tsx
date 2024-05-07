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

export const InputComponent = (props: TransformedInput) => {
  const { validation, label, id, note, size, maxLength, placeholder, file } =
    props;
  const inputProps = useInputAssetProps(props);

  return (
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
