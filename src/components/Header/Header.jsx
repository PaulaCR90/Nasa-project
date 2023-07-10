import Browser from '../Browser/Browser';
import './Header.css'

const Header = ({setApiBox, date, setDate, selectValue, setSelectValue, ApiBox, setMarsBox}) => {
    return (
        <header>
            <img className='logoHeader' src="/src/assets/NasaLogo.png" alt="NasaLogo" />
            <Browser setMarsBox={setMarsBox} setApiBox={setApiBox} date={date} setDate={setDate} selectValue={selectValue} setSelectValue={setSelectValue} />
        </header>
    )
}

export default Header;