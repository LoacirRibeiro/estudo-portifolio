import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from './Contatos.module.css'
import { GoMail} from 'react-icons/go'
import { BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'

function Contatos() {
    return (
      <>
        <Header/>
        <Container>
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>

            <div className={styles.icones}>
              <a href='mailto:loacirr@gmail.com' target='_blank'
              rel='noopener noreferrer'>
                < GoMail className={styles.icone}/>
              </a>
              <a href='https://github.com/LoacirRibeiro' target='_blank'
              rel='noopener noreferrer'>
              <BsGithub className={styles.icone}/>
              </a>
              <a href='https://www.linkedin.com/in/loacirRibeiro' target='_blank'
              rel='noopener noreferrer'>
              <BsLinkedin className={styles.icone}/>
              </a>
              <a href='https://wa.me/+5563984199781 ' target='_blank'
              rel='noopener noreferrer'>
              <BsWhatsapp className={styles.icone} />
              </a>
            </div>
            
          </section>
        </Container>
        <Footer />
      </>
    );
  }
  
  export default Contatos;
