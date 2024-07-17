import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from './Projetos.module.css';

function Projetos() {

  const [ repositories, setRepositories ] = useState ([])

  useEffect(( ) => {
      const buscarRepoitorios = async () => {
        const response = await fetch('https://api.github.com/users/edsonmaia/repos?page=1&per_page=50')         
        const data = await response.json()
        setRepositories(data)
      }
      buscarRepoitorios()
  },[])


    return (
      <section className={styles.projetos}>
        <Header />
        <Container>
          <h2>Projetos </h2>
          {
            repositories.length > 0 ? (
              <section className={styles.lista}>
                {
                  repositories.map((repo) =>(
                    <Card 
                      key={repo.id}
                      name={repo.name}
                      description={repo.description} 
                      html_url={repo.html_url} 
                    />
                 ))
                }
              </section>
            ) : (
               <p>Carregando repositórios...</p>
            )
          }
        </Container>
        <Footer />
      </section>
    );
  }
  
  export default Projetos;