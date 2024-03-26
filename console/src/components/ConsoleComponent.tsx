import React from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import { TransformedConsole } from "../types";
import { ReactAsset } from "@player-ui/react";

const useConsoleAssetProps = (props: TransformedConsole) => {
  const [localValue, setLocalValue] = React.useState(props.expression ?? "");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLocalValue(e.target.value);
    props.set(e.target.value);
  };

  const onSubmit: React.FocusEventHandler<HTMLInputElement> = (e) => {
    // Logic to get the result of the expression and add it to the History
  };

  return {
    onChange,
    onSubmit,
    value: localValue,
  };
};

const useConsoleProps = (props: TransformedConsole) => {
  return {
    inputProps: useConsoleAssetProps(props),
    ...props,
    value: props.expression,
  } as const;
};

export const ConsoleComponent = (props: TransformedConsole) => {
  const { evaluations, inputProps } = useConsoleProps(props);

  return (
    <>
      <ReactAsset asset={{ type: "list", id: "some" }}>
        {evaluations?.map(() => (
          <></>
        ))}
      </ReactAsset>
      {/* <ReactAsset {...props} type="input" /> */}
      <FormControl onSubmit={inputProps.onSubmit}>
        <Input onChange={inputProps.onChange} value={inputProps.value} />
        <Button type="submit" />
      </FormControl>
    </>
  );
};
