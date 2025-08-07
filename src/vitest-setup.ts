import { worker } from "./mocks/browser";

vi.mock("./mock-me", () => ({ default: "mocked" }));

beforeAll(async () => {
  await worker.start();
});
