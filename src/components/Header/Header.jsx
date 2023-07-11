import Browser from "../Browser/Browser";
import "./Header.css";

const Header = ({
  setApiBox,
  date,
  setDate,
  setMarsBox,
}) => {
  return (
    <header>
      <img
        className="logoHeader"
        src="../public/assets/NasaLogo.png"
        alt="NasaLogo"
      />
      <Browser
        setMarsBox={setMarsBox}
        setApiBox={setApiBox}
        date={date}
        setDate={setDate}
      />
    </header>
  );
};

export default Header;
