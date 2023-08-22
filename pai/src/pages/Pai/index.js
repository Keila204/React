import './index.scss';
import { useState } from 'react';




export default function Pai(){

    const [user, setUser] = useState('');
    const [userF, setUserF] = useState([]);
    const [tempo, setTempo] = useState('');
    const [tempoF, setTempoF] = useState([]);
    const [avatar, setAvatar] = useState('');
    const [avatarF, setAvatarF] = useState([]);
    const [descricao, setDescricao] = useState('');
    const [descricaoF, setDescricaoF] = useState([]);
    const [curtidas, setCurtidas] = useState('');
    const [curtidasF, setCurtidasF] = useState([]);
    const [post, setPost] = useState('');
    const [postf, setPostF] = useState([]);
    const [coracao, setCoracao] = useState('');
    const [coracaoF, setCoracaoF] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [mensagemT, setMensagemT] = useState([])
    function Postar(){
    userF.push(user);
    setUserF([...userF]);
    
    tempoF.push(tempo);
    setTempoF([...tempoF]);

    postf.push(post);
    setPostF([...postf]);

    avatarF.push(avatar);
    setAvatarF([...avatarF]);

    descricaoF.push(descricao);
    setDescricaoF([...descricaoF]);

    curtidasF.push(curtidas);
    setCurtidasF([...curtidasF]);
 
    coracaoF.push(coracao);
    setCoracaoF([...coracaoF]);
    
    mensagemT.push(mensagem)
    setMensagemT([...mensagemT])
    

    }

    
    return(         
        <div className="Container-instagram">
          <div className="App-header">
        <h1 className='text'>OI</h1>
        <p className='texto'>Pai tudo bem? Pai aperte esse botão;</p>
        <p className='texto'>Aqui tem uma musica onde mostra o quanto eu amo o senhor</p>
      
          <button className='btt'>
          <a href="https://www.youtube.com/watch?v=OPZGvqACUnQ">Visit W3Schools.com!</a>
          </button>
          <p className='texto'>Logo abaixo você pode fazer um teste de postagem</p>
                <div className='dados-insta'>
                    
                    <div className='user-insta'>
                        <div>
                            <p>Usuário:</p>
                            <input type='text' value={user}  onChange={e => setUser(e.target.value)}/>
                        </div>
                        <div>
                            <p>Tempo:</p>
                        </div>
                            <input id='tempo' type='text' value={tempo} onChange={e =>  setTempo(e.target.value)}/>
                    </div>
                    <div className='avatar'>
                        <p>Avatar:</p>
                        <input type='text' value={avatar} onChange={e => setAvatar(e.target.value)}/>
                    </div>
                    <div className='desc'>
                        <p>Descrição:</p>
                        <input id='descricao-insta' value={descricao} onChange={e => setDescricao(e.target.value)} type='text'/>
                    </div>
                    <div className='post-insta'>
                        <div id='post'>
                            <p>Post:</p>
                            <input type='text' value={post} onChange={e => setPost(e.target.value)}/>
                        </div>
                        <div>
                            <p>Curtidas:</p>
                            <input id='tempo1' type='number' value={curtidas} onChange={e => setCurtidas(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={Postar}>Postar</button>
                </div>

                <div className='post-insta'>
                    <div className='dados-post'>
                        <img src={avatarF}/>
                        {userF.map(e => <p style={{marginRight:'5px'}}>{e} </p>)}
                        {tempoF.map(e => <p id='tempo' > • {e}</p>)}
                    </div>
                    <div className='postagem-insta'>
                        <img id='post1' src={postf}/>
                        <div className='icones-insta'>
                            <img src={coracaoF}/>
                            <img src={mensagemT}/>
                        </div>
                        <div>
                            {curtidasF.map(e => <p style={{marginRight: '10px'}}>{e}Curtidas</p>)}
                        </div>
                        <div className='comentarios'>{userF.map(e => <p style={{fontWeight: '700' , marginRight: '10px'}}>{e}</p>)} {descricaoF.map(e => <p>{e}</p>)}</div>
                    </div>
                </div>
                <div className='fim'>
                    <h1>Feliz dia dos pais</h1>
                    <img className='pai'src='https://cdn.discordapp.com/attachments/1108403541548204035/1139737843229532352/IMG_20230705_105837_638.webp'/>
                </div>
            </div>
            </div>
        
    );
}