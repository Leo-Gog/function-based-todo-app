import Todo from "./toDoItem"
export default function List({data:[todos, moveTodo, removeTodo], status, currentTodo}){
    return(
    <div>
        <p><span className="head">{status ? "მიმდინარე:" : "შესრულებული:"}</span></p>
        <ul>
            {todos.filter(x => x.status === status).map((value) => 
                <Todo value={value} moveTodo={moveTodo} key={value.id} removeTodo={removeTodo}/>
            )}
            {(status && currentTodo !== undefined && currentTodo.length >= 1) && <li>{currentTodo}</li>}
        </ul>
    </div>
    )
}