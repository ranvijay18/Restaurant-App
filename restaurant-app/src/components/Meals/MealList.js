import "./MealList.css"
import Items from "./Items"



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

     const meal = Dummy_List.map((ele) => <li><Items items={ele} /></li>)
    return(
        <div className="list">
            <ul>{meal}</ul>
        </div>
    )
     
}

export default MealList