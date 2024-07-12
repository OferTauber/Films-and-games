import { Entity } from "./types";

export const getCategories = (data: Entity[]): Record<string, number> => {
  const accumulator: Record<string, number> = {};

  return data.reduce((acc, entity) => {
    const { Type } = entity;

    if (acc[Type]) acc[Type]++;
    else acc[Type] = 1;

    return acc;
  }, accumulator);
};

export const filterDataByCategory = (
  data: Entity[],
  category: string | null
): Entity[] => {
  debugger;
  return category ? data.filter((entity) => entity.Type === category) : data;
};
