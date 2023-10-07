import TodoItem from "./TodoItem";

function TodoList({ items, setItems }) {
  const listItem = items.map((i) => (
    <TodoItem key={i.id} item={i} items={items} setItems={setItems}></TodoItem>
  ));

  return (
    <div>
      <ul className="todo-main">{listItem}</ul>
    </div>
  );
}
export default TodoList;
