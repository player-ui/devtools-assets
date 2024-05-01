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
        {
          values?.map(({ asset: {value: label, radio} }) => {
            const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
              setRadio(e.target.checked);
            };

            return (
              <Radio value={radio} checked={radio === value} onChange={onChange}>
                {label}
              </Radio>
            )
          })
        }
      </Stack>
    </RadioGroup>
  );
};
