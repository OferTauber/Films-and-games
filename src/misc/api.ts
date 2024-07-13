import axios, { AxiosResponse } from "axios";
import mockData from "./mock-data.json";

import type { GetDataRes,Entity } from "./types";

// TODO - insted of importing a file - use file open
// TODO - implament an api set for a fake address to update the title renaming

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


type UpdateItemProps = Pick<Entity, "imdbID"|"Title">
export const updateItem = async ({ imdbID, Title }: UpdateItemProps): Promise<AxiosResponse> => {
 return axios.put(`/`, {
    Title,
  });

  
};
