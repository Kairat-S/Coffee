import React from "react";

export default function Input({ value, setValue }) {
  return (
    <div>
      <input
        id="filter"
        type="text"
        placeholder="start typing here..."
        className="shop__search-input"
        value={value}
        onChange={(e) => {
          console.log(e.target.value, "change");
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
