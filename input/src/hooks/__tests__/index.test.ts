import { useInputAssetProps, useFileInputAssetProps } from "..";
import { describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
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
    const { result } = renderHook(() =>
      useInputAssetProps(inputAssetPropsMock)
    );

    expect(result.current).toMatchInlineSnapshot();
  });

  test("returns file upload input props and handlers", () => {
    const { result } = renderHook(() =>
      useFileInputAssetProps(inputFileAssetPropsMock)
    );

    expect(result.current.accept).toBe(".txt, .json");
    expect(result.current.onChange).toBeDefined();
  });
});
