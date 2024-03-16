import "./MealList.css"



const MealList = () => {

    const Dummy_List = [
        {
            dish: "Pizza",
            description: "skjhd sjhdjfh sjhkdh",
            price: "25"
        },
        {
            dish: "Pizza",
            description: "skjhd sjhdjfh sjhkdh",
            price: "25"
        },
        {
            dish: "Pizza",
            description: "skjhd sjhdjfh sjhkdh",
            price: "25"
        },
        {
            dish: "Pizza",
            description: "skjhd sjhdjfh sjhkdh",
            price: "25"
        },
        {
            dish: "Pizza",
            description: "skjhd sjhdjfh sjhkdh",
            price: "25"
        }
    ]

     const meal = Dummy_List.map((ele) => <li>{ele.dish}<br/>{ele.description}<br/> $ {ele.price}</li>)
    return(
        <div className="list">
        <ul>{meal}</ul>
        </div>
    )
     
}

export default MealList