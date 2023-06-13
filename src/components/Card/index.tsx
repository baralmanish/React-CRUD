import { FC } from "react";

import { Card as AntCard, Tooltip } from "antd";

import { IBeer } from "../../interfaces/beer";

import "./style.scss";

interface ICard {
  beer: IBeer;
}

const Card: FC<ICard> = ({ beer }: ICard) => {
  const ingredients = beer.ingredients ? `Ingredients: ${Object.keys(beer.ingredients).join(", ")}` : "";

  return (
    <AntCard className="app-card">
      <div className="d-flex">
        <div className="app-card__left">
          <Tooltip title={ingredients}>
            <img src={beer.image_url} />
          </Tooltip>
        </div>
        <div className="app-card__right">
          <h2>{beer.name}</h2>
          <span>{beer.tagline}</span>
          <p>{beer.description}</p>
        </div>
      </div>
    </AntCard>
  );
};

export default Card;
