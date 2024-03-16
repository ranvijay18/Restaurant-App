import "./Items.css"


const Items = (props) => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log(props.keys)
    };
   return(
    <>
    <div className="meal">
    <div>
    <h2>{props.items.dish}</h2>
    <p>{props.items.description}</p>
    <h3>$ {props.items.price}</h3>
    </div>
    <div className="amount">
        <form>
            <label className="head">Amount </label>
            <input type="number" defaultValue="1"/>
            <br/>
            <br/>
            <button onClick={handleClick}>+ Add</button>
        </form>
    </div>
    </div>
    <hr />
    </>
   )
}


export default Items; 