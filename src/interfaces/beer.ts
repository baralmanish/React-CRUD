export interface IBeer {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  ingredients?: Ingredients;
}

export interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

export interface Malt {
  name: string;
  amount: Amount;
}

export interface Amount {
  value: number;
  unit: string;
}

export interface Hop {
  name: string;
  amount: Amount;
  add: string;
  attribute: string;
}
