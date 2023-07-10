import React from "react";
import Today from '../../sources/Today';

const InputDate = ({date, setDate}) => {

  return (
    <>
      <input
        type="date"
        value={date}
        max={Today}
        min="1995-06-16"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </>
  );
};

export default InputDate;