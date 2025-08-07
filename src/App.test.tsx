import { render } from "@testing-library/react";
import App from "./App";

test("mocks the mock-me module", () => {
  const { getByText } = render(<App />);
  const element = getByText(/mocked/);
  expect(element).toBeInTheDocument();
});
