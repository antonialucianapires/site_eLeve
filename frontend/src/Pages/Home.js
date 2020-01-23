
import React, {Component} from 'react';
import './styles/Home.css'
import eLevese from '../images/eleveseHome.png'
import Flipcard from '../components/UI/Flipcard/Flipcard'

class Home extends Component {
    render() {
        return (
            <section>
            <section className="intro">
            <div className="download-app">
                <h1>Aqui, ser responsável ambiental é divertido e pode gerar recompensas!</h1>
                <p>O aplicativo e-Leve conecta pontos de coletas de lixo eletrônico à oficinas de remontagem. Seja um doador de lixo, acumule pontos e troque por descontos em diferentes estabelecimentos e serviços.</p>
            </div>
            <div className="imageApp"><img src={eLevese}/></div>
        </section>
        <section className="beneficios">
            <Flipcard />
            <Flipcard/>
            <Flipcard/>
        </section>
        <section className="funcionamento">
            <div className="descricao-funcionamento"></div>
            <div className="passo-a-passo">
                
            </div>
        </section>
        </section>
        )
    }
}

export default Home;