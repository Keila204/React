import './index.scss';

import axios from 'axios';
import { useState } from 'react';
import lupa from '../../assets/images/icon-buscar.png';
import logo from '../../assets/images/XMLID_344_.png';
export default function Sorvetes () {
   const [filme, setfilme] = useState ('')
    const [List, setList] = useState ([])

    async function buscar() {
        let url = 'http://www.omdbapi.com/?apikey=2ad4a1f8&s=' + filme;
        let Response = await axios.get (url)
        setList (Response.data.Search)
    }


    return(
        <div className='filme'>

            <header>
                    <img src={logo} alt='' /> 
                <h3>Portifolio.me</h3> 
            
            </header> 
            <div className='fundo'>
            <div className='filme-secao'>
            <div className='filme-card'>        
                <div className='filme-card-cima'>
                    <div className='image'>
                        <h1>IMDB</h1>
                    </div>
                </div>
                <div className='filme-card-baixo'>
                    <div className='Titulo'>
                        <h1>Consulta de Filmes</h1>
                    </div>
                    <div className='filme-procurar'>
                                          
                        <input type='text' value={filme}onChange={e => setfilme(e.target.value)}/>
                          <button onClick={buscar}><img alt='' src={lupa} /></button>
                    </div>
                    <div className='filme-caracters'>
                        <div className='filmes-codigo'>
                            <h1>
                                Código
                            </h1>   
                        </div>
                        <div className='filmes-nome'>
                            <h1>
                                Título
                            </h1>
                        </div>
                        <div className='filmes-data'>
                            <h1>
                                Ano
                            </h1>
                        </div>     
                    </div>
                    <div className='filme-pesquisado'>
                        {List.map(item =>
                       <div className='filmes'>
                            <div className='filmes-codigo'>
                                <h1>
                                    {item.imdbID}
                                </h1>   
                            </div>
                            <div className='filmes-nome'>
                                <h1>
                                    {item.Title}
                                </h1>
                            </div>
                            <div className='filmes-data'>
                                <h1>
                                    {item.Year}
                                </h1>
                            </div>
                            <div className='filmes-imagem'>
                                <img src={item.Poster} alt=''/>
                            </div>
                        </div>  
                    )
                    }      
                    </div>             
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}