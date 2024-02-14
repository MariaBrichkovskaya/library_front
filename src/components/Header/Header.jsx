import header from "./Header.module.css";
import logo from './../../resources/logo.jpg';
const Header = () => {
    return (
        <header className={header.header}>
            <img className={header.img} src={logo} alt="Logo" />
            <div className={header.title}>Library</div>
        </header>
    );
}

export default Header;