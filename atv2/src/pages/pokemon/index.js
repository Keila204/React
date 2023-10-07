import { useState } from 'react';
import './index.scss'
import axios from 'axios'

export default function Pokemon() {

    const[pokemon, setPokemon] = useState ([]);
   
    async function buscarPokemons() {
        
        let url = 'https://pokeapi.co/api/v2/pokemon';

        let response = await axios.get(url);

        let ListaPokemons = [];

        for (let item of response.data.results) {
            let pokemonResp = await axios.get(item.url);

            let imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;

            let tipos = '';
            for (let t of pokemonResp.data.types) {
                tipos = tipos + t.type.name + ',';
            }

            ListaPokemons.push({
                nome: item.name,
                imagem: imagem,
                tipos: tipos
            })
        }

        setPokemon(ListaPokemons);
    }

    

    return(


              <div className='principal'>


                 <img className='animo' src='./assets/image/pokemon.png'/>
                 <p></p>
                     <button onClick={buscarPokemons}>Encontrar Pokémons</button>

                <div className='lista'>
                    
                        {pokemon.map(item =>
                            <div className='pokemon'>
                    
                            <img src= {item.imagem}/>
                            <h2>{item.nome}</h2>
                            <p>{item.tipos}</p>
                         </div>
                            
                     )}

                     
                   
                </div>
                <div className='btt'>
                     <button>Buscar Mais</button>
                     </div>
              </div>


    );
}



