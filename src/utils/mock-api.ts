import { AxiosResponse } from "axios";
import mockData from "./mock-data.json";

import type { GetDataRes } from "./types";

export const getData = async (): Promise<AxiosResponse<GetDataRes>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response: AxiosResponse = {
        data: mockData,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as AxiosResponse["config"],
      };
      resolve(response);
    }, 800);
  });
};
