import { Hono } from "hono";

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>

user.get("/signup", async (c) => {
  return c.json("Hello World");
})


export default user;
