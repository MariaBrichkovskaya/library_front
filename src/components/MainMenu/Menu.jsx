import menu from './Menu.module.css';
const Menu = () => {

    return (
        <nav className={menu.menu}>
            <div>
                <a href="/books">Книги</a>
                <a href="/authors">Авторы</a>
                <a href="/">Личная инфа</a>
                <a href="/history">История</a>

            </div>


        </nav>
    );

}




export default Menu;