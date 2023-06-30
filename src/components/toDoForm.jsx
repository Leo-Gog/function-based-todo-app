export default function Form({addTodo, getInputValue}) {
  return (
    <form onSubmit={addTodo}>
      <input type="text" id="todo-input" placeholder="ჩაწერე რისი გაკეთება გსურს ..." onChange={getInputValue}/>
      <button>დამატება</button>
    </form>
  )
}