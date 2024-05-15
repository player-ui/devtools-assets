import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { InputComponent } from "../index";
import { TransformedInput } from "../../types";

describe("InputComponent test", () => {
  const inputAssetPropsMock: TransformedInput = {
    id: "default-input",
    type: "input",
    set: () => {},
    format: (value) => value,
    value: "test",
    binding: "some.binding",
  };

  const inputFileAssetPropsMock: TransformedInput = {
    ...inputAssetPropsMock,
    id: "file-input",
    file: true,
    accept: [".txt"],
  };

  test("Renders default Input asset", () => {
    const inputElement = render(<InputComponent {...inputAssetPropsMock} />);

    const input = inputElement.container.querySelector(
      "input"
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Test 2" } });

    fireEvent.blur(input);

    expect(input.value).toBe("Test 2");
  });

  test("Renders file type Input asset", () => {
    const inputElement = render(
      <InputComponent {...inputFileAssetPropsMock} />
    );

    const fileUploader = inputElement.container.querySelector(
      "input"
    ) as HTMLInputElement;

    const file = new File(['{"some":"content"}'], "content.json", {
      type: "json",
    });

    fireEvent.change(fileUploader, { target: { files: [file] } });

    expect(inputElement.container.querySelector("p")?.textContent).toBe(
      "Uploaded file: content.json"
    );
  });
});
