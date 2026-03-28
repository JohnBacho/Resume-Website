import styles from "./ImageStyle.module.css";


export default function image(props){
    return(
        <div className={styles.ImageBlock}>
            <img src={props.img} alt={props.alt} />
        </div>
    )
}