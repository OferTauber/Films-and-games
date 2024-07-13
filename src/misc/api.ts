import axios, { AxiosResponse } from "axios";

import type { GetDataRes, Entity } from "./types";

export const getData = async (): Promise<AxiosResponse<GetDataRes>> => {
  return axios.get("https://6692ca34346eeafcf46e3142.mockapi.io/films/data/0");
};

type UpdateItemProps = Pick<Entity, "imdbID" | "Title">;
export const updateItem = async ({
  imdbID,
  Title,
}: UpdateItemProps): Promise<AxiosResponse> => {
  return axios.put(`/`, {
    Title,
    imdbID,
  });
};
