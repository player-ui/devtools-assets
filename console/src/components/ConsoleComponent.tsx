import React from "react";
import {
  FormControl,
  Input,
  Button,
  UnorderedList,
  ListItem,
  FormErrorMessage,
} from "@chakra-ui/react";
import { TransformedConsole } from "../types";
import { useInputAssetProps } from "@devtools-ui/input";

// const evaluateExpression = e`publish(${INTERACTIONS.EVALUATE_EXPRESSION}, ${bindings.expression})`;

const useConsoleAssetProps = (props: TransformedConsole) => {
  const inputProps = useInputAssetProps({
    ...props,
    binding: props.expression,
    type: "input",
  });

  const onSubmit: React.FocusEventHandler<HTMLInputElement> = (e) => {
    // Logic to get the result of the expression and add it to the History
  };

  return {
    inputProps,
    onSubmit,
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
  const { evaluations, inputProps, validation } = useConsoleProps(props);

  return (
    <>
      <UnorderedList>
        {evaluations &&
          evaluations.map(({ expression, result, outcome }, idx) => (
            <ListItem key={`console-item-${idx}`}>
              {`${expression} ${result}`}
            </ListItem>
          ))}
      </UnorderedList>
      <FormControl
        isInvalid={Boolean(validation)}
        onSubmit={inputProps.onSubmit}
      >
        <Input {...inputProps} />
        <Button type="submit">Evaluate</Button>
        {validation && (
          <FormErrorMessage>{validation.message}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};
