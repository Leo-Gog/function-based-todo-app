export default function Todo({value, moveTodo, removeTodo}){
    const {todo, id, status} = value
    const remove = <button className="remove-btn" onClick={()=>removeTodo(id)}>წაშლა</button>
    return (
        <li id={id}>
            {todo}
            <div>
                <button onClick={()=>moveTodo(todo, id, status)}>
                    {status?'დასრულება':'დაბრუნება'}
                </button>
                {!status?remove:undefined}
            </div>
        </li>
    )
}