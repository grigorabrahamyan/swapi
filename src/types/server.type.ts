export interface IPeopleListServer {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
  detail?: string;
}

export interface IPeopleList extends IPeopleListServer {
  id: number;
}

export interface IPeopleDataServer {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPeopleListServer[];
}

export interface IPeopleData extends IPeopleDataServer {
  results: IPeopleList[];
}

export type TAxiosType<T> = {
  data: T;
};
