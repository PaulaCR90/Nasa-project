import "./Browser.css";
import InputDate from '../BrowserComponents/InputDate';
import Select from "../BrowserComponents/Select";
import Button from "../BrowserComponents/Button";

const Browser = ({date, setDate, selectValue, setSelectValue, setApiBox}) => {
  return (
    <>
      <nav>
        <InputDate date={date} setDate={setDate}/>
        <Select setApiBox={setApiBox} date={date} selectValue={selectValue} setSelectValue={setSelectValue} />
        <Button date={date} setApiBox={setApiBox}/>
      </nav>
    </>
  );
};

export default Browser;
