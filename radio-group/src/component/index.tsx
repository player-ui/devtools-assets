import React from "react";
import type { TransformedRadioGroup } from "../types";
import { RadioGroup, Radio, Stack, FormLabel } from "@chakra-ui/react";
import { ReactAsset } from "@player-ui/react";

export const RadioGroupComponent = (props: TransformedRadioGroup) => {
  const { id, groupLabel, setRadio, values } = props;

  console.log("RADIO PROPS:", props);

  return (
    <RadioGroup>
      {groupLabel && (
        <FormLabel htmlFor={id}>
          <ReactAsset {...groupLabel.asset} />
        </FormLabel>
      )}
      <Stack>
        {values?.map(({ asset: { value, label, id: itemId } }) => {
          const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            setRadio(e.target.value);
          };

          return (
            <Radio key={itemId} id={itemId} value={value} onChange={onChange}>
              {label}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};
