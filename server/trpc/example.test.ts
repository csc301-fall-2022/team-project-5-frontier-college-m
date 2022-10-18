import { createContext } from "./createContext";
import { router } from "./router";

test("example tRPC test", async () => {
  const ctx = await createContext();
  const caller = router.createCaller(ctx);

  const count = await caller.query("hello");
  expect(count).toBeGreaterThanOrEqual(0);
});
