import { italic } from "colorette";

describe("server", () => {
  it("sets the environment to testing", () => {
    expect(process.env.DB_ENV).toBe("development");
  });
});
