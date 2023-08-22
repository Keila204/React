import './index.scss'
import { useState } from 'react'
import Topo from '../../components/Topo';


export default function Sorvetes () {
    const [item, setItem] = useState('')    
    const [preco, setPreco] = useState(0)  
    const [produtos, setProdutos] = useState([]) 
    const [precototal, setTotal] = useState (0)

    function exibir() {
        let ped = {
          produto: produtos,
          preco: preco,
        };
    
        setProdutos([...produtos, ped]);
    
        let soma = preco;
        for (const prod of produtos) {
          soma += prod.preco;
          
          setTotal(soma.toFixed(2));
          setItem('');
          setPreco(0);

        }
       
        
    
       
      }
    
    
    

    return(
        <div className='Sorvetes'>
        <Topo/>
            <div className='Sorvetes-card'>
                <div className='Sorvetes-card-up'>
                    <div className='Logo'>
                        <h1>Sorveteria</h1>
                    </div>
                </div>
                <div className='Sorvetes-card-down'>
                    <div className='Titulo'>
                        <h1>
                            Novo item
                        </h1>
                    </div>
                    <div className='Sorvetes-card-adic'>
                        <div className='item'>
                            <input type="text" placeholder='Item' onChange={e => setItem (e.target.value)} value={item}/>
                        </div>
                        <div className='preco'>
                            <div className='preco-rs'>
                                <h1>R$</h1>
                            </div>
                            <input type="text" placeholder='preço' onChange={e => setPreco (e.target.value)} value={preco}/>
                        </div>
                        <button className='adicionar' onClick={exibir}>
                            Adicionar
                        </button>
                    </div>
                    <div className='Titulo'>
                        <h1>
                            Lista de compras
                        </h1>
                        <h1>
                            R$ {precototal}
                        </h1>
                    </div>
                    <div className='Sorvetes-card-itens'>
                    <div>
                    {produtos.map((item, index) => (
                   <div key={index}>
                    {item.produto}
                   {item.preco.toFixed(2)}
                   
                    </div>
                ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}