export type EntityType = "movie" | "series" | "game";

export interface Film {
  Title: string;
  Year: `${number}`;
  imdbID: string;
  Type: EntityType;
  Poster: string;
}

export interface GetFilmsRes {
  results: Film[];
  totalResults: `${number}`;
}
