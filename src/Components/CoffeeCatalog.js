import React, { useEffect, useState } from "react";
import CatalogWrap from "./CatalogWrap";

const CoffeeCatalog = () => {
  const [coffeeCatalog, setCoffeeCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCoffeedata() {
      const res = await fetch("http://localhost:4000/bestsellers");
      const coffee = await res.json();
      console.log(coffee);
      setCoffeeCatalog(coffee);
      setLoading(false);
    }
    getCoffeedata();
    return () => setCoffeeCatalog([]);
  }, []);

  if (loading) {
    return "...Loading";
  } else {
    return (
      <CatalogWrap
        coffeeCatalog={coffeeCatalog}
        countryExist={false}
      ></CatalogWrap>
    );
  }
};

export default CoffeeCatalog;
