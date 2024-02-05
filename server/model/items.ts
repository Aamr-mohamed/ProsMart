export interface Item {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  category: string;
  image: Buffer;
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picture?: string;
  picturePath?: string;
  role: string;
  id: number;
};
