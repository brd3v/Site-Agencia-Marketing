import { Botao } from "../../components/Botao";
import Card from "../../components/Card";
import { Paragrafo } from "../../components/Paragrafos";
import { Titulo } from "../Sobre/styled";
import { Main, Template } from "./styled";

export const Cards = () => (
    <Main>
          <Titulo>O que fazemos.</Titulo>
           <Template>

    <Card>
        <img src="https://cdn.pixabay.com/photo/2017/01/17/01/18/information-1985655_1280.png" alt="" />
        <p>Sites Institucionais.</p>
        <h5><a href="#">Saiba Mais</a></h5>
    </Card>
    <Card>
        <img src="https://cdn.pixabay.com/photo/2016/07/16/22/54/twitter-1522890_1280.jpg" alt="" />
        <p>Landing Pages.</p>
        <h5><a href="#">Saiba Mais</a></h5>
    </Card>
    <Card>
        <img src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg" alt="" />
        <p>Manutenção em Sites</p>
        <h5><a href="#">Saiba Mais</a></h5>
    </Card>
    <Card>
        <img src="https://cdn.pixabay.com/photo/2015/04/18/07/49/shopping-cart-728430_1280.png" alt="" />
        <p>Lojas Virtuais</p>
        <h5><a href="#">Saiba Mais</a></h5>
    </Card>
    <Card>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" alt="" />
        <p>Aplicativos Mobile</p>
        <h5><a href="#">Saiba Mais</a></h5>
    </Card>
    <Card>
        <img src="https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg" alt="" />
        <p>Trafeg Pago.</p>
        <h5><a href="#">Saiba Mais</a></h5>
    </Card>



    </Template>
    </Main>

)
