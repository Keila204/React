

import React, { useState } from 'react';
import axios from 'axios';
import './index.scss'

import NetflixList from '../../componentes/netflixList';


export default function Neflix () {

    const [filme, setFilme] = useState('')
    const [listPagFilme, setListPageFilme] = useState([])

    
    async function BuscarFilme() {

    const url = `https://www.omdbapi.com/?apikey=2ad4a1f8&s=${filme}`;
    const response = await axios.get(url);

    const pagiii = []

    const filmesArray = [];

    const Results = Number(response.data.totalResults)

    const totalPages = Math.ceil(Results / 10);


    for(let cont = 1; cont <= totalPages; cont++) {
        
        pagiii.push(cont)
    }


    console.log(pagiii)
    for (const page of pagiii) {
        const Newurl = `https://www.omdbapi.com/?apikey=2ad4a1f8&s=${filme}&&page=${page}`;
        const nuevaResponse = await axios.get(Newurl);
        filmesArray.push(...nuevaResponse.data.Search);
    }

    const novoFilmes = []
    
    for (const item of filmesArray) {
        if (item.Poster != "N/A")
        novoFilmes.push(item);
    }

    setListPageFilme(novoFilmes);

    }


    return (
        <div className="page-Netflix">
            <div className='cont-netflix'>
                <div className='cabecalho-netflix'>
                    <div className='cont-links_cabecalho'>
                        <div>
                            <img  src='/logocabecalho.png'/>
                        </div>

                        <h2>Portifolio.me</h2>

                        <div>Início</div>
                        <div>Séries</div>
                        <div>Filmes</div>
                        <div>Bombando</div>
                        <div>Minha Lista</div>
                    </div>
                    <div className='cont-infos_input_e_login'>
                        <div className='cont-input_e_buscar'>
                            <div>
                                <input type='text' placeholder='Pesquisar pelo Título' value={filme}  onChange={e => setFilme(e.target.value)}/>
                            </div>
                            <div  onClick={BuscarFilme}>
                                <img  src='/icon-buscarNet.png'/>
                            </div>
                        </div>

                        <p>Bruno</p>
                        <div>
                            <img  src='/sininho.png'/>
                        </div>
                        
                        <div>
                            <img  src='/imgLogin.png'/>
                        </div>
                        
                        <div>
                            <img  src='/setaBaixoNetflix.png'/>
                        </div>
                        
                    </div>
                </div>

                <div className='cont-infos'>
                    <h1>Friends</h1>
                    <p>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</p>
                    <div className='button-Assistir'>
                        <img  src='/setaPlay.png'/>
                        Assistir
                    </div>
                </div>
                <h3>Resultado da busca</h3>
                
            </div>
            <div className='list'>
                  
                <NetflixList  list={listPagFilme}/>
            </div>
        </div>
    )
}