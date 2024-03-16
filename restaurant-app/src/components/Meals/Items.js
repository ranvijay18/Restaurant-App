import "./Items.css"


const Items = (props) => {
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
            <input type="text" value="1" size="3"/>
            <br/>
            <br/>
            <button>+ Add</button>
        </form>
    </div>
    </div>
    <hr />
    </>
   )
}


export default Items; 