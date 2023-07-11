import "./Browser.css";
import InputDate from "../BrowserComponents/InputDate";
import Select from "../BrowserComponents/Select";
import Button from "../BrowserComponents/Button";
import { useState } from "react";

const Browser = ({ date, setDate, setApiBox, setMarsBox }) => {
  const [selectValue, setSelectValue] = useState("apod");
  return (
    <>
      <nav>
        <InputDate date={date} setDate={setDate} />
        <Select setSelectValue={setSelectValue} />
        <Button
          setMarsBox={setMarsBox}
          date={date}
          setApiBox={setApiBox}
          selectValue={selectValue}
        />
      </nav>
    </>
  );
};

export default Browser;
