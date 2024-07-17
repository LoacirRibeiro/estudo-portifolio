import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import Footer from '../../components/footer/Footer';

function PaginaBase (){
    retutn (
        <main>
            <Header />
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </main>
    );
}

export default PaginaBase;