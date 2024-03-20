import Fruit from "./Fruit"

export default function List(){
    //const lists=['Money',"Time","Workout","Patience","Hardwork"]
    const lists=[
        {Name:"Apple",Price:"10"},
        {Name:"Banana",Price:"15"},
        {Name:"Orange",Price:"5"},
    ]
    return <div>
        <ul>
            {lists.map((last)=>(
                <Fruit key={last.Name} Name={last.Name} Price={last.Price}/>
            ))}
        </ul>
    </div>
    }