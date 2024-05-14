import { useInputAssetProps, useFileInputAssetProps } from "..";
import { describe, expect, test } from "vitest";
import type { TransformedInput } from "../../types";

const inputAssetPropsMock: TransformedInput = {
  id: "root",
  type: "input",
  set: () => {},
  format: (value) => value,
  value: "test",
  binding: "some.binding",
};

const inputFileAssetPropsMock: TransformedInput = {
  ...inputAssetPropsMock,
  file: true,
  accept: [".txt"],
  handleFile: (name) => name,
};

describe("useInputProps hooks", () => {
  test("Returns regular input props and handlers", () => {
    const result = useInputAssetProps(inputAssetPropsMock);

    expect(result).toMatchSnapshot();
  });

  test("returns file upload input props and handlers", () => {
    const result = useFileInputAssetProps(inputFileAssetPropsMock);

    expect(result.accept).toBe(".txt, .json");
    expect(result.onChange).toBeDefined();
  });
});
