import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ThemeTogglerButton } from '../ThemeTogglerButton/themetogglerbutton';
import { SiPokemon } from "react-icons/si";
import Search from '../Search/index.jsx';

const Header = ({ onSearch }) => {

    return (

        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.icone} to="/">
                    <SiPokemon />
                </Link>
                <Search onSearch={onSearch} />
                <ThemeTogglerButton />
            </nav>
        </header>
    )
}

export default Header
