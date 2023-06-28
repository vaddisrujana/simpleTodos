import './index.css'

const TodoItem = props => {
  const {todosList, deleteTodo} = props
  const {title, id} = todosList

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <div className="back">
        <p className="para">{title}</p>
        <button type="button" onClick={onDelete} className="button">
          delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
