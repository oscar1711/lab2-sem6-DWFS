import "./Card.css"
import { Link } from "react-router-dom";

function Card ({nombre="nombre", cargo="cargo"}){
    return (
        <div className="card">
            <Link to = {nombre}>
            <h2>{nombre}</h2>
            </Link>
            <p>{cargo}</p>
            
        </div>
    )
}
 
export default Card;