export interface IDish {
  id: string;
  name: string;
  description: string;
  urlImage: string;
  price: number;
}

export interface IDishMutation {
  name: string;
  description: string;
  urlImage: string;
  price: number;
}
