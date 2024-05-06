import React from "react";
import type { TransformedRadioGroup } from "../types";
import { RadioGroup, Stack, FormLabel, Radio } from "@chakra-ui/react";
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
          const { value, label } = radioItem;

          return (
            <Radio key={value} onChange={onChange} value={value}>
              <ReactAsset {...label.asset} />
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};
