import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Contatos from './pages/contatos/Contatos'
import Projetos from './pages/projetos/Projetos';
import Page404 from './pages/page404/Page404';
// import PaginaBase from "./pages/paginaBase/PaginaBase";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<PaginaBase/>}> */}
                    <Route index element={ <Home /> }></Route>
                    <Route path='/sobre' element={ <Sobre /> }></Route>
                    <Route path='/projetos' element={ <Projetos /> }></Route>
                    <Route path='/contatos' element={ <Contatos /> }></Route>
                    <Route path='/*' element={ <Page404 /> }></Route>
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

