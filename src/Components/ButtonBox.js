import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function ButtonBox({ selectedCountry, setSelectedCountry }) {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    function getCountryData() {
      const country = ["Brazil", "Kenya", "Columbia"];
      console.log(country);
      setCountryData(country);
    }
    getCountryData();
    return () => setCountryData([]);
  }, []);

  return (
    <div>
      {countryData.map((item) => {
        return (
          <Button
            country={item}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          ></Button>
        );
      })}
    </div>
  );
}
