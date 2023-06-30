export default function Form({addTodo, getInputValue, currentTodo}) {
  return (
    <form onSubmit={addTodo}>
      <input type="text" id="todo-input" placeholder="ჩაწერე რისი გაკეთება გსურს ..." value={currentTodo} onChange={getInputValue}/>
      <button>დამატება</button>
    </form>
  )
}