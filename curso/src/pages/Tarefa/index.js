
import { useState } from 'react';
import './index.scss';


export default function Tarefa(){

  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function alterarTarefa(e) {
    setTarefa(e.target.value);
  }

  function adicionar() {
    tarefas.push(tarefa);
    setTarefas([...tarefas]);
    
    setTarefa('');
  }
      
  return (
    <div className="pagina-lista-tarefa">
    <div className='container'>
      <h1> Lista de Tarefas </h1>
      <div>
        Adicionar tarefa: <input type='text' value= {tarefa} onChange={alterarTarefa} />
        <button onClick={adicionar}> Adicionar </button>
      </div>
      <div>
        <ul>
          {tarefas.map(item => <li> {item} </li>)}
        </ul>
        
      </div>
    </div>
  </div>
  );
}