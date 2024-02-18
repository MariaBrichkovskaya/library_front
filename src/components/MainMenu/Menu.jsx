import { NavLink } from 'react-router-dom';
import menu from './Menu.module.css';
const Menu = () => {

    return (
        <nav className={menu.nav}>
            <div className={menu.item}>
                <NavLink to="/books" className={navData => navData.isActive ? menu.activeLink : menu.item} >Книги</NavLink>
                <NavLink to="/authors" className={navData => navData.isActive ? menu.activeLink : menu.item}>Авторы</NavLink>
                <NavLink to="/" className={navData => navData.isActive ? menu.activeLink : menu.item}>Личная инфа</NavLink>
                <NavLink to="/history" className={navData => navData.isActive ? menu.activeLink : menu.item}>История</NavLink>
            </div>

        </nav>
    );

}


export default Menu;