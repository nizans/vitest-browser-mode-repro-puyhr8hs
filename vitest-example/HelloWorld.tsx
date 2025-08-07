import { originalFunction } from "./mock-me";

export default function HelloWorld({ name }: { name: string }) {
  return (
    <div>
      <h1>Hello {originalFunction()}!</h1>
    </div>
  );
}
