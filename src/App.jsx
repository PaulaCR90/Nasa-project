import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Selected from "./pages/Selected";
import RoverSelected from "./pages/RoverSelected";
import NotFound from "./pages/404";
import Footer from "./components/Footer/Footer";
import Today from "./sources/Today";

function App() {
  const [date, setDate] = useState(Today);
  const [ApiBox, setApiBox] = useState({});
  const [MarsBox, setMarsBox] = useState([]);
  const [selectValue, setSelectValue] = useState("0");

  return (
    <>
      <Header
        MarsBox={MarsBox}
        setMarsBox={setMarsBox}
        ApiBox={ApiBox}
        setApiBox={setApiBox}
        date={date}
        setDate={setDate}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mars"
          element={
            <RoverSelected
              MarsBox={MarsBox}
              setMarsBox={setMarsBox}
              date={date}
              setDate={setDate}
              selectValue={selectValue}
              setSelectValue={setSelectValue}
            />
          }
        />
        <Route
          path="/apod"
          element={
            <Selected
              ApiBox={ApiBox}
              setApiBox={setApiBox}
              date={date}
              setDate={setDate}
              selectValue={selectValue}
              setSelectValue={setSelectValue}
            />
          }
        />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
