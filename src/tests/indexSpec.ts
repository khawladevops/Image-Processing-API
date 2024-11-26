import supertest, { Response } from "supertest";
import app from "../index";

const test1 = supertest(app);

describe("Here to test image endpoints", () => {
  it("this test image exixtance ", async (): Promise<void> => {
    const resp: Response = await test1.get("/image?filename=img1");
    expect(resp.status).toEqual(200);
  });

  it("this test file name is not correct ", async (): Promise<void> => {
    const resp: Response = await test1.get("/image?fileme=img1");
    expect(resp.status).toEqual(404);
  });
});
