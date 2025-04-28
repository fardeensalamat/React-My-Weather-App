import styles from '../styles/Header.module.css';

function Header(){

    return(
       <nav className={styles.Navbar}>
           <span>Weather App</span>
       </nav>
    );
}

export default Header;