import React from "react";

const Select = ({ setSelectValue }) => {
  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <select name="Apis" defaultValue={"DEFAULT"} onChange={handleSelect}>
        <option value="DEFAULT" disabled>
          ¡Selecciona una API!
        </option>
        <option value="apod">API APOD</option>
        <option value="mars">API MARS ROVER</option>
      </select>
    </>
  );
};

export default Select;
