import React from "react";
import CoffeeCatalogItem from "./CoffeeCatalogItem";
import Error from "./Error";

export default function CatalogWrap({ coffeeCatalog, countryExist }) {
  if (coffeeCatalog.length === 0) {
    return (
      <Error
        text={"Такое кофе не найдено к сожалению! Измените запрос!"}
      ></Error>
    );
  } else {
    return (
      <div class="best__wrapper">
        {coffeeCatalog.map((item) => {
          // console.log(item.id);
          return (
            <CoffeeCatalogItem
              id={item.id}
              imgUrl={item.url}
              name={item.name}
              price={item.price}
              country={item.country}
              countryExist={countryExist}
            ></CoffeeCatalogItem>
          );
        })}
      </div>
    );
  }
}
