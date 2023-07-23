import React, { useState } from "react";

export default function Button({
  country,
  selectedCountry,
  setSelectedCountry,
}) {
  const indexCountry = selectedCountry.indexOf(country);
  function handleClick() {
    if (indexCountry === -1) {
      console.log("add");
      setSelectedCountry([...selectedCountry, country]);
      //console.log(selectedCountry);
    } else {
      console.log("remove");
      setSelectedCountry([
        ...selectedCountry.slice(0, indexCountry),
        ...selectedCountry.slice(indexCountry + 1),
      ]);
      console.log(setSelectedCountry);
    }
  }
  return (
    <button
      className="shop__filter-btn"
      style={
        indexCountry === -1 ? { fontWeight: "normal" } : { fontWeight: "bold" }
      }
      onClick={handleClick}
    >
      {country}
    </button>
  );
}
