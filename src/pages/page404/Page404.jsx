import styles from './Page404.module.css';
import Header from  '../../components/header/Header';
import Container from '../../components/container/Container';
import Footer from '../../components/footer/Footer';

function Page404 () {
    return (
        <section className={styles.page404}>   
            <Header />
            <Container>
                <h2 className={styles.titulo2}>Algo de errado não está certo!</h2>
                <div className={styles.textos}>
                    <span className={styles.texto_grande}>404</span> <br/>
                    <strong className={styles.texto_vermelho}>Página não Localizada!</strong>
                </div>
            </Container>
            <Footer />
        </section>
    );

}

export default Page404;