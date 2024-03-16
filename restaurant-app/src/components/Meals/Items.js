import "./Items.css"


const Items = (props) => {
   return(
    <div>
    <h2>{props.items.dish}</h2>
    <p>{props.items.description}</p>
    <h3>$ {props.items.price}</h3>
    <hr />
    </div>
   )
}


export default Items; 