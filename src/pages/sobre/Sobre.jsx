import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer'
import Container from "../../components/container/Container";
import styles from './sobre.module.css';
import avatar from'./images/avatar.jpg';
import html from './images/icon-html.svg';
import css from './images/icon-css.svg';
import js from './images/icon-js.svg';
import react from './images/icon-react.svg';
import node from './images/icon-node.svg';
import sql from './images/icon-sql.svg';


function Sobre() {
    return (
      <>
        <Header />
        <Container>
           <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt='Avatar' className={styles.avatar}/>
                <div className={styles.textos}>
                  <h2>Sobre </h2>
                  <p>Sou <span>Loacir Ribeiro</span> <br/>
                   <br/> <strong>Estágiario dev full Stack</strong></p>

                  <p>Trabalahando com desenvolvimento desde Setembro de 2023.</p>

                  <p>Explorando o mundo do desenvolvimento</p>

                  <p>Transformando ideias em realidade através de<br/>
                    soluções inovadoras </p>
                  <p>Especializando-me no desenvolvimento web</p>
                  <p>Transformando códigos em soluções completas </p>
                </div>
            </div>
            <div className={styles.techs}>
              <h3>Techs</h3>
              <div className={styles.icones}>
                <img src={html} alt='Icone do html'/>
                <img src={css} alt='Icone do css'/>
                <img src={js} alt='Icone do js'/>
                <img src={react} alt='Icone do react'/>
                <img src={node} alt='Icone do node'/>
                <img src={sql} alt='Icone do sql'/>
              </div>
            </div>
           </section>
        </Container>
        <Footer />
      </>
    );
  }
  
  export default Sobre;