import './homeButtons.css'

export default function HomeButtons(props){
    return(
        <div onClickCapture={props.onClick} className="button-div">
            <div className={props.buttonActive} style={{backgroundColor: props.color1}}>
                {props.svg}
            </div>
            <p>{props.name}</p>
        </div>
    )
}