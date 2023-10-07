import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <section className="todo-header">
          <TodoHeader items={items} setItems={setItems} />
          <TodoList items={items} setItems={setItems} />
        </section>
        <TodoFooter items={items} />
      </div>
    </div>
  );
}

export default App;
