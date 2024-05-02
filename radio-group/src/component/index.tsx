import React from "react";
import type { TransformedRadioGroup } from "../types";
import { RadioGroup, Radio, Stack, FormLabel } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";

export const RadioGroupComponent = (props: TransformedRadioGroup) => {
  const { id, label, setRadio, values, value } = props;

  return (
    <RadioGroup>
      {label && (
        <FormLabel htmlFor={id}>
          <ReactAsset {...label.asset} />
        </FormLabel>
      )}
      <Stack>
        {values?.map(({ asset: { value: label, radio, id: itemId } }) => {
          const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            setRadio(e.target.value);
          };

          return (
            <Radio id={itemId} value={radio} onChange={onChange}>
              {label}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};
