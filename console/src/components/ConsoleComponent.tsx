import React from "react";
import {
  FormControl,
  Input,
  Button,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { TransformedConsole } from "../types";

const useConsoleProps = (props: TransformedConsole) => {
  return {
    ...props,
  } as const;
};

export const ConsoleComponent = (props: TransformedConsole) => {
  const { history, evaluate } = useConsoleProps(props);

  const onSubmit: React.FocusEventHandler<HTMLInputElement> = () => {
    // Logic to get the result of the expression and add it to the History
    evaluate();
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
      <FormControl onSubmit={onSubmit}>
        <Input {...props} />
        <Button type="submit">Evaluate</Button>
      </FormControl>
    </Flex>
  );
};
