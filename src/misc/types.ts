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

export enum SortDirection {
  Asc = 1,
  Desc = -1,
}

export enum View {
  List = "flex",
  Gallery = "grid",
}

export interface ToastProps {
  message?: string;
  variant: "success" | "warning";
}
