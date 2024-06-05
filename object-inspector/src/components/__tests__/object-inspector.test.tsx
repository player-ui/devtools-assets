import React from "react";
import { render, fireEvent, waitFor, getByText } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ObjectInspectorComponent } from "../index";
import { TransformedObjectInspector } from "../../types";

describe("ObjectInspectorComponent test", () => {
  const objectInspectorAssetPropsMock: TransformedObjectInspector = {
    id: "default-objectIns",
    type: "object-inspector",
    data: { test: "test", b: { foo: "bar", arr: [{ prop1: "Arr prop" }] } },
  };

  const objectInspectorAssetFilterPropsMock: TransformedObjectInspector = {
    ...objectInspectorAssetPropsMock,
    id: "filterObjIns",
    filter: true,
  };

  test("Renders default ObjectInspector asset", async () => {
    const { findByText } = render(
      <ObjectInspectorComponent {...objectInspectorAssetPropsMock} />
    );

    const testText = await findByText("test");

    expect(testText).toBeDefined();
  });

  describe("Testing Object Inspecor with filter", () => {
    test("Renders default ObjectInspector asset with filter", async () => {
      const { findByPlaceholderText, findByText } = render(
        <ObjectInspectorComponent {...objectInspectorAssetPropsMock} filter />
      );

      const filterInput = await findByPlaceholderText("Search path...");

      const leafText = await findByText('"bar"');

      expect(filterInput).toBeDefined();
      expect(leafText).toBeDefined();
    });

    test("Filters data tree on path", async () => {
      const { container, findByPlaceholderText, findByText, queryByText } =
        render(
          <ObjectInspectorComponent {...objectInspectorAssetPropsMock} filter />
        );

      await findByPlaceholderText("Search path...");

      const FilterInput = container.querySelector("input") as HTMLInputElement;

      fireEvent.change(FilterInput, { target: { value: "b.foo" } });

      const fooText = await findByText("bar");
      const testText = queryByText("test");

      expect(fooText).toBeDefined();
      expect(testText).toBeNull();
    });

    test("Filters data tree on path with array index", async () => {
      const { container, findByPlaceholderText, findByText, queryByText } =
        render(
          <ObjectInspectorComponent {...objectInspectorAssetPropsMock} filter />
        );

      await findByPlaceholderText("Search path...");

      const FilterInput = container.querySelector("input") as HTMLInputElement;

      fireEvent.change(FilterInput, { target: { value: "b.arr[0]" } });

      const fooText = await findByText("prop1");
      const testText = queryByText("test");

      expect(fooText).toBeDefined();
      expect(testText).toBeNull();
    });

    test("Shows 'no path result' message", async () => {
      const { container, findByPlaceholderText, findByText, queryByText } =
        render(
          <ObjectInspectorComponent {...objectInspectorAssetPropsMock} filter />
        );

      await findByPlaceholderText("Search path...");

      const FilterInput = container.querySelector("input") as HTMLInputElement;

      fireEvent.change(FilterInput, { target: { value: "whatever" } });

      const noResultText = await findByText("No result for the given path");

      expect(noResultText).toBeDefined();
    });

    test("Shows 'no given index found' message", async () => {
      const { container, findByPlaceholderText, findByText, queryByText } =
        render(
          <ObjectInspectorComponent {...objectInspectorAssetPropsMock} filter />
        );

      await findByPlaceholderText("Search path...");

      const FilterInput = container.querySelector("input") as HTMLInputElement;

      fireEvent.change(FilterInput, { target: { value: "b.arr[1]" } });

      const noResultIndexText = await findByText(
        "No result for the given index"
      );

      expect(noResultIndexText).toBeDefined();
    });
  });
});
