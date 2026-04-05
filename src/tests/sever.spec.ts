import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import { app } from "../server.js";

describe("Server", () => {
  it("should return Hello World! on GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello World!" });
  });
});
