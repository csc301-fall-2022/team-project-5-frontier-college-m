import { createRootRouter } from "./createRouter";

export const router = createRootRouter().query("hello", {
  async resolve() {
    return "hi";
  },
});
