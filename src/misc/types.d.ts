export interface Entity {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface GetDataRes {
  results: Entity[];
  totalResults: string;
}
