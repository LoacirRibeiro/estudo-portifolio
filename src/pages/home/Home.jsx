import Header from  '../../components/header/Header';
import Footer from  '../../components/footer/Footer';
import Container from '../../components/container/Container';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home (){
    return(
        <>
            <Header />
            <Container>
                <section className={styles.home}>
                    <div className={styles.apresentacao}>
                        <p>
                         Olá, sou <br/>
                            <span>Loacir Ribeiro, </span><br/>
                            Estagiário de desenvolvimento. <br/>
                            Bem-vindo ao meu portfólio.
                        </p>
                        <Link to='/sobre' className={`${styles.btn} ${styles.btn_red}`}>
                            Saiba mais
                        </Link>
                    </div> 
                        <figure>
                            <img  className={styles.img_home} src= '/developer-blue.svg' alt='Imagem de Home' />
                        </figure>   
                </section>
            </Container>
            
            <Footer />
        </>
    );
}

export default Home;
                
