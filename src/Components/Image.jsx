import "./ImageStyle.css";


export default function image(props){
    return(
        <div className="ImageBlock">
            <img src={props.img}></img>
        </div>
    )
}