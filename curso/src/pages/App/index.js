import './index.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <h1>Home</h1>
        <div>
          
          <Link className='acess' to= '/contato'> Contato </Link>
          
          <Link to= '/tarefa'> Tarefas </Link>
          
          <Link to= '/media'> Média </Link>
           
          <Link to= '/correio'> Correio</Link>


        </div>
    </div>
  );
}

export default App;
