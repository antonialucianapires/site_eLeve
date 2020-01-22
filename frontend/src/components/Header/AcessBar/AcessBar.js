import React, { Component } from 'react';
import './AcessBar.css';

class AcessBar extends Component {
    render() {
        return <div>
            <div className="acessibilidade">  
	    <ul id="atalhos">  
			<li><a href="#iniciodoconteudo">Ir para o conteúdo [1]</a></li>  
			<li><a href="#iniciodomenu">Ir para o menu [2]</a></li>  
			<li><a href="#busca">Ir para a busca [3]</a></li>  
			<li><a href="#iniciodorodape">Ir para o rodapé [4]</a></li>  
	    </ul>  
	    <ul id="botoes">  
			<li><a href="acessibilidade.html"> Acessibilidade </a></li>         
			<li><a href="#" id="bt_contraste">Alto contraste</a></li>  
			<li><a href="mapa.html"> Mapa do site </a></li>  
	    </ul>  
	</div>
			
        </div>
    }
};

export default AcessBar;