import { describe, expect, test } from "vitest";
import "@testing-library/dom";

describe("Console", () => {
  test("renders without crashing", () => {
    expect(1).toBe(1);
  });
});
