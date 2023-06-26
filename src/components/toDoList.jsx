import Todo from "./toDoItem"
export default function List({arr, moveTodo, removeTodo, status, currentTodo}){
    return(
    <div>
        <p><span className="head">{status?"მიმდინარე:":"შესრულებული:"}</span></p>
        <ul>
            {arr.filter((x)=>x.status===status).map((value) => {
                return <Todo value={value} moveTodo={moveTodo} key={value.id} removeTodo={removeTodo}/>
            })}
            {status && currentTodo!==undefined && currentTodo.length >=1?<li>{currentTodo}</li>:undefined}
        </ul>
    </div>
    )
}