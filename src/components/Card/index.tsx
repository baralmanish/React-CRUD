import { FC } from "react";

import { Card as AntCard } from "antd";

import { IBeer } from "../../interfaces/beer";

interface ICard {
  beer: IBeer;
}

const Card: FC<ICard> = ({ beer }: ICard) => {
  return (
    <AntCard style={{ width: 300 }}>
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
    </AntCard>
  );
};

export default Card;
