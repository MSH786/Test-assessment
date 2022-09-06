import nock from "nock";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../config/baseUrl";
import { GET_PRODUCT } from "../routes/api";
import { HttpStatus } from "../utils/httpStatus";

const apiURL = baseUrl;

describe("async example", () => {
  beforeEach(() => {
    nock.cleanAll();

    nock(apiURL).get(GET_PRODUCT).reply(200);
  });

  it("works with promises", async () => {
    const response = await axios.get(`${apiURL}${GET_PRODUCT}`);
    expect(response.status).toBe(HttpStatus.OK);
  });
});
