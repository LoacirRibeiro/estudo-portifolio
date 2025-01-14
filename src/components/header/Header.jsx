import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header (){
    return (
        <header className={styles.header}>
            <Link to='/'>
                <span>loacirRibeiro.dev</span>
            </Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/projetos'>Projetos</Link>
                <Link to='/contatos'>Contatos</Link>
            </nav>
            <div className={styles.menuButton}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
    )
}

export default Header;