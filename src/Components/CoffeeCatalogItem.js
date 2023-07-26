import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ADD_PRODUCT,
  DECREASE_COUNT,
  INCREASE_COUNT,
  REMOVE_PRODUCT,
} from "../context/Types";
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
  const priceValue = price.slice(0, -1) * dollarToTenge;
  const [state, dispatch] = useContext(magazineContext);

  const startCount = () => {
    console.log("item price: ", priceValue);
    dispatch({ type: INCREASE_COUNT, payload: priceValue });
  };

  const addToCart = () => {
    dispatch({
      type: ADD_PRODUCT,
      payload: { name, country, price: priceValue, id: id },
    });
  };

  const removeToCart = () => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: { id: id },
    });
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
            <button onClick={addToCart}> Add to Cart </button>

            {state.products.findIndex((item) => {
              return item.id === id;
            }) !== -1 ? (
              <button onClick={removeToCart}>Remove to Cart</button>
            ) : (
              <></>
            )}
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
