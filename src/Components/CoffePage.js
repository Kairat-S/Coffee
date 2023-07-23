import React, { useEffect, useState } from "react";
import CatalogWrap from "./CatalogWrap";
import { Link } from "react-router-dom";

const CoffePage = ({ searchValue, selectedCountry }) => {
  const [cleanData, setCleanData] = useState([]);
  const [coffeeCatalog, setCoffeeCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getCoffeedata() {
      const res = await fetch("http://localhost:4000/coffee");
      const coffee = await res.json();
      console.log(coffee);
      setCoffeeCatalog(coffee);
      setCleanData(coffee);
      setLoading(false);
    }
    getCoffeedata();
    return () => setCleanData([]);
  }, []);

  if (loading) {
    return "...Loading";
  } else {
    if (searchValue === "") {
      if (selectedCountry.length === 0) {
        return (
          //<Link to={`/CoffeeItemPage/${cleanData.map((item) => item.id)}`}>
          <CatalogWrap
            coffeeCatalog={cleanData}
            countryExist={true}
          ></CatalogWrap>
          //</Link>
        );
      } else {
        // console.log("else");
        return (
          <CatalogWrap
            coffeeCatalog={cleanData.filter((item) => {
              console.log(item);
              if (selectedCountry.includes(item.country)) {
                return item;
              }
            })}
            countryExist={true}
          ></CatalogWrap>
        );
      }
    } else {
      return (
        <CatalogWrap
          coffeeCatalog={cleanData
            .filter(
              (item) =>
                item.country
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .filter((item) => {
              if (selectedCountry.length === 0) {
                return item;
              } else {
                if (selectedCountry.includes(item.country)) {
                  return item;
                }
              }
            })}
          countryExist={true}
        ></CatalogWrap>
      );
    }
  }
};

export default CoffePage;
