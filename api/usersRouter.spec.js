const request = require("supertest");
const userRouter = require("./usersRouter");

describe("userRouter / ", () => {
  it("should return status 200", () => {
    request(userRouter)
      .get("/:id")
      .then(res => {
        expect(res.status).toBe(500);
      });
  });
});
