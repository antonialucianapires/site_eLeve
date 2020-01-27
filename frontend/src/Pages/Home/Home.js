import React from 'react';
import eLeve from '../../images/eleveseHome.png'

const Home = () => (
    <section>
        <div>
            <h1>Aqui, ser responsável ambiental é divertido e pode gerar recompensas!</h1>
            <p>O aplicativo e-Leve conecta você a pontos de coleta para que possa realizar o descarte correto de lixos eletrônicos. Seja um doador de lixo, acumule pontos e troque por descontos em diferentes estabelecimentos e serviços.</p>
        </div>
        <div>
            <img src={eLeve}/>
        </div>
    </section>
);

export default Home;