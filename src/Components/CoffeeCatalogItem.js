import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DECREASE_COUNT, INCREASE_COUNT } from "../context/Types";
import magazineContext from "../context/magazine/MagazineContext";

export default function CoffeeCatalogItem({
  id,
  imgUrl,
  name,
  country,
  price,
  countryExist,
}) {
  const dollarToTenge = 450;
  const priceValue = price.slice(0, -1);
  const [state, dispatch] = useContext(magazineContext);
  const startCount = () => {
    console.log("item price: ", priceValue);
    console.log("tenge price: ", priceValue * dollarToTenge);
    dispatch({ type: INCREASE_COUNT, payload: priceValue * dollarToTenge });
  };
  if (countryExist) {
    return (
      <Link to={`/CoffeePage/${id}`}>
        <div>
          <div className="best__item">
            <img src={imgUrl} alt="coffee" />
            <div className="best__item-title">{name}</div>
            <div className="best__item-title">{country}</div>
            <div className="best__item-price">{price}$</div>
            <button
              onClick={() => {
                startCount();
              }}
            >
              Buy ME
            </button>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div>
        <div className="best__item">
          <img src={imgUrl} alt="coffee" />
          <div className="best__item-title">{name}</div>
          <div className="best__item-price">{price}$</div>
        </div>
      </div>
    );
  }
}
