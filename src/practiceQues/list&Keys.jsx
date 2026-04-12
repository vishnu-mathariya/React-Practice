const fruits = ["Apple","Mango","Banana"]
export const FruitList = () => {
    return (
        <ul>
            {
                fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))
            }
        </ul>
    )
}


// ===========================================



const students =["Amit", "Rahul", "Sneha", "Priya"]

export const Student = () => {
return (
    <ul>
        {
            students.map((std)=>(
                <li key={std}>{std}</li>
            ))
        }
    </ul>
)
}



// =================================================



const F1= ["Apple","Banana","Mango","Orange"]

export const Fruits = () =>{
    return (

    <ul>
        {
            F1.map((frt)=>(
                <li key={frt}>{frt}</li>

            ))
        }
    </ul>
)}


// ================================================



const l1= [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Mango" }
]

export const RenderList = () =>{
    return (
        <ul>
            {
                l1.map((lst)=>(
                    <li key={lst.id}>Name: {lst.name}</li>
                ))
            }
        </ul>
    )
}

// =============================================


