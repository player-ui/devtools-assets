import { describe, expect, test } from "vitest";
import { isObject, getPathvalue } from "../ObjectInspectorComponent";

describe("Testing the isObject pure utility function", () => {
  test("It verifies correct item values as objects", () => {
    expect(isObject({ some: "prop" })).toBe(true);
    expect(isObject([{ arr: "prop" }])).toBe(true);
  });
  test("It verifies incorrect item values as no objects", () => {
    expect(isObject("prop")).toBe(false);
    expect(isObject(20)).toBe(false);
  });
});

describe("Testing the getPathvalue pure utility function", () => {
  const testObject = {
    mainProp: "Some value",
    arrProp: [
      {
        someProp: "foo",
        booleanProp: "false",
      },
    ],
  };
  test("It verifies regular path in object", () => {
    expect(getPathvalue(testObject, "mainProp")).toBe(testObject.mainProp);
    expect(getPathvalue(testObject, "something")).toBe(
      "No result for the given path"
    );
  });
  test("It verifies path with array index", () => {
    expect(getPathvalue(testObject, "arrProp[0].someProp")).toBe("foo");
    expect(getPathvalue(testObject, "arrProp[1].someProp")).toBe(
      "No result for the given index"
    );
  });
});
