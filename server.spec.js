const request = require("supertest");
const server = require("./server.js");

describe("server", () => {
  it("sets the environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
describe("get /", () => {
  it("should return a status 200", () => {
    return request(server)
      .get("/")
      .expect(200);
  });
  it("should return a status 200", async () => {
    /* three ways to test asynchronous call with async/await, done callback, return */
    const actual = await request(server).get("/");
    expect(actual.status).toBe(200);
  });

  it("should return JSON as type", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("application/json");
  });

  it("should return JSON using done keyword", done => {
    request(server)
      .get("/")
      .then(res => {
        expect(res.type).toBe("application/json");
        done();
      });
  });
  it("should return {api: 'is up and running after a short break'}", () => {
    const expected = { api: "is up and running after a short break" };
    request(server)
      .get("/")
      .then(res => {
        expect(res.body).toEqual(expected);
      });
  });
});
