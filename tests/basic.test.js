const request = require("supertest");
const app = require("../app");

describe("dummy test", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/users")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});