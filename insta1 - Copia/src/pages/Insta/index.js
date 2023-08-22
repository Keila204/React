import './index.scss';
import { useState } from 'react';




export default function Insagram(){

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
                        <p>Descrição</p>
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
                
            </div>
        
    );
}