export default function Form({func, func2}) {
  return (
    <form onSubmit={func}>
      <input type="text" id="todo-input" placeholder="ჩაწერე რისი გაკეთება გსურს ..." onChange={func2}/>
      <button>დამატება</button>
    </form>
  )
}