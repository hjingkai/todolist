import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

let nextId = 0

function App() {

  const [name, setName] = useState('')
  const [items, setItems] = useState([])

  const listItem = items.map(
    i => <Item key={i.id} item={i}></Item>
  )

  function Item({item}) {
    
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

  function handleKeyUp(event) {

    if ( event.key === 'Enter') {
      
      if (name.trim().length !== 0) {
        setItems([
          ...items,
          { id: nextId++, text:name, completed: false}
        ])
  
        return setName('')
      } else if (name.trim().length === 0) {
        return alert('不可輸入空白')
      }
    }
  }

  function mouseClick(event) {
    if (name.trim().length !== 0) {
      setItems([
        ...items,
        { id: nextId++, text:name, completed: false}
      ])

      return setName('')
    } else if (name.trim().length === 0) {
      return alert('不可輸入空白')
    }
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <section className='todo-header'>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyUp={handleKeyUp}
            type='text'
            placeholder='輸入後按 Enter or 添加鈕 確認'
          />
          <button onClick={mouseClick}>添加</button>
          <ul className="todo-main">
            {listItem}
          </ul>
        </section>
        <section className="todo-footer">
          <div>✅ Of Completed Items: {items.filter(item => item.completed).length}</div>
          <div>✅ Of Uncompleted Items: {items.filter(item => !item.completed).length}</div>
        </section>
      </div>
    </div>
  );
}

export default App;
