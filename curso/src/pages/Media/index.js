import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';

function App() {

    const[n1,setN1] = useState(0);
    const[n2,setN2] = useState(0);
    const[n3,setN3] = useState(0);

    const[media,setMedia] = useState(0);
    const[situacao,setSituacao] = useState('');

    function calcularMedia(){
      let m = (n1 + n2+ n3) /3;
      setMedia(m);

      if(m < 0 || m > 10){
        setSituacao('Inválido')
      }
      else if(m >= 5){
        setSituacao('Aprovado')
      }
      else if(m <= 3){
        setSituacao('Recuperação')
      }
      else {
        setSituacao('Reprovado')
      }

    }
  
  return (
    <div className="arco">
      <div className='atv'>
      <h1>Média</h1>

      <div>
        <label>Nota 01:</label>
        <input type='text' value={n1} onChange={e => setN1(Number(e.target.value)) } />
      </div>
      
      <div>
        <label>Nota 02:</label>
        <input type='text' value={n2} onChange= {e => setN2(Number(e.target.value)) } />
      </div>

      <div>
        <label>Nota 03:</label>
        <input type='text' value={n3} onChange={e => setN3(Number(e.target.value))} />
      </div>

      <div className='direita'>
        <button onClick={calcularMedia}>Calcular</button>
      </div>
      
      <div className='direita'>
       {media}
      </div>

      <div className='direita'>
        {situacao}
      </div>


      </div>

    <Link to = '/'>Voltar ao Home</Link>
    </div>
  );
}

export default App;