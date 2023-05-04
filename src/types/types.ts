export enum EGender {
  Male = "male",
  Female = "female",
  Unknown = "n/a",
  Hermaphrodite = "hermaphrodite",
}

export interface IAlert {
  variant: string;
  isOpen: boolean;
  text: string;
}

export interface IStoreErrors {
  noData: boolean;
}
