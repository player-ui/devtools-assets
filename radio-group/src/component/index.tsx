import React from "react";
import type { TransformedRadioGroup } from "../types";
import { RadioGroup, Stack, FormLabel } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";

export const RadioGroupComponent = (props: TransformedRadioGroup) => {
  const { id, label, setRadio, values } = props;

  return (
    <RadioGroup>
      {label && (
        <FormLabel htmlFor={id}>
          <ReactAsset {...label.asset} />
        </FormLabel>
      )}
      <Stack>
        {values?.map((radioItem) => {
          const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            setRadio(e.target.value);
          };

          return (
            <ReactAsset
              key={radioItem.asset.id}
              onChange={onChange}
              {...radioItem.asset}
            />
          );
        })}
      </Stack>
    </RadioGroup>
  );
};
