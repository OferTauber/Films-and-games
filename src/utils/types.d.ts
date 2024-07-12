export type EntityType = "movie" | "series" | "game";

export interface Entity {
  Title: string;
  Year: string;
  imdbID: string;
  Type: EntityType;
  Poster: string;
}

export interface GetDataRes {
  results: Entity[];
  totalResults: string;
}
