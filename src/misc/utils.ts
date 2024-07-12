import type { Entity } from "./types";

export const getCategories = (data: Entity[]): Record<string, number> => {
  const accumulator: Record<string, number> = {};

  return data.reduce((acc, entity) => {
    const { Type } = entity;

    if (acc[Type]) acc[Type]++;
    else acc[Type] = 1;

    return acc;
  }, accumulator);
};

interface FilterDateProps {
  data: Entity[];
  category: string | null;
  searchValue: string;
}

export const filterData = ({
  data,
  category,
  searchValue,
}: FilterDateProps): Entity[] => {
  return data.filter(({ Title, Type, Year }) => {
    if (category && Type !== category) return false;

    if (searchValue)
      return Title.includes(searchValue) || Year.includes(searchValue);
    else return true;
  });
};
