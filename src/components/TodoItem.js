function TodoItem({ item, items, setItems }) {
    
    function handleCompleteClick() {
      item.completed = true

      setItems([
        ...items
      ])
    }

    function handleDeleteClick() {
      setItems(items.filter(
        x => x.id !== item.id
      ))
    }

    if (item.completed) {
      return (
        <li className='item'>
          <label>{item.text} ✅</label>
          <button onClick={handleDeleteClick} className="btn btn-danger">Delete</button>
        </li>
      )
    } 
    
    return (
      <li className='item'>
        <label>{item.text}</label>
        <button onClick={handleCompleteClick} className="btn btn-completed">Completed</button>
        <button onClick={handleDeleteClick} className="btn btn-danger">Delete</button>
      </li>
    )
}

export default TodoItem;
