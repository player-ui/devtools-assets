import React from "react";
import { Input } from "@chakra-ui/react";
import { InputAsset } from "../types";

export const InputComponent = ({ value, size, maxLength, placeholder }: InputAsset) => (
  <Input size={size} maxLength={maxLength} placeholder={placeholder}>
    {value}
  </Input>
);
