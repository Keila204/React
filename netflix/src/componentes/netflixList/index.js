import './index.scss';

export default function NetflixList (props) {
    
    return (
        
        <div className="Page-Lista_Netflix">

            <div className='cont-posters-netflix'>

                
                {props.list.map(item => (
                    <div>
                        <img src={item.Poster} />
                    </div>
                ))}
            </div>
            
        </div>
    );
}