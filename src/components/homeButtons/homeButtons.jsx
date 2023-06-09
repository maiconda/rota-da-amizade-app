import './homeButtons.css'

export default function HomeButtons(props){
    return(
        <div className="button-div">
            <div style={{backgroundColor: props.color1}}>
                {props.svg}
            </div>
            <p>{props.name}</p>
        </div>
    )
}