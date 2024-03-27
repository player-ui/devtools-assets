import React from "react";
import {
  FormControl,
  Input,
  Button,
  UnorderedList,
  ListItem,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { TransformedConsole } from "../types";
import { expression as e } from "@player-tools/dsl";
import { useInputAssetProps } from "@devtools-ui/input";

const useConsoleProps = (props: TransformedConsole) => {
  return {
    ...props,
    inputProps: useInputAssetProps({
      ...props,
      type: "input",
    }),
    value: props.expression,
  } as const;
};

export const ConsoleComponent = (props: TransformedConsole) => {
  const { history, inputProps, validation } = useConsoleProps(props);

  const onSubmit: React.FocusEventHandler<HTMLInputElement> = (event) => {
    // Logic to get the result of the expression and add it to the History
    const evaluateExpression = e`publish(evaluate-expression, ${inputProps.value})`;
  };

  return (
    <Flex direction="column">
      <UnorderedList>
        {history &&
          history.map(({ expression, result }, idx) => (
            <ListItem key={`console-item-${idx}`}>
              {`${expression} - ${result}`}
            </ListItem>
          ))}
      </UnorderedList>
      <FormControl isInvalid={Boolean(validation)} onSubmit={onSubmit}>
        <Input {...inputProps} />
        <Button type="submit">Evaluate</Button>
        {validation && (
          <FormErrorMessage>{validation.message}</FormErrorMessage>
        )}
      </FormControl>
    </Flex>
  );
};
