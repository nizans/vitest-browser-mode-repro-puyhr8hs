import { describe, expect, vi } from "vitest";
import { render } from "vitest-browser-react";
import HelloWorld from "./HelloWorld.jsx";
import { test } from "./test-extend.js";

describe("HelloWorld Component", () => {
  vi.mock("./mock-me", () => ({
    originalFunction: vi.fn(() => "mockedFunction"),
  }));

  test("renders name", async () => {
    const { getByText } = render(<HelloWorld name="Vitest" />);

    await expect.element(getByText("Hello mockedFunction")).toBeInTheDocument();
  });
});
