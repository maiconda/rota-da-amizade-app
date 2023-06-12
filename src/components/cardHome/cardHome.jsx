import './cardHome.css'

export default function CardHome(props){
    return(
        <div className='card-home'>
            <img src={props.img} alt="" />
            <div className='card-home-text'>
                <h3>{props.title}</h3>
                <p>Cidade: {props.city}</p>
                <p>Categoria: {props.type}</p>
            
                <button>Visitar</button>
            </div>
        </div>
    )
}