function TodoFooter({ items }) {
  return (
    <div>
      <section className="todo-footer">
        <div>
          ✅ Of Completed Items: {items.filter((item) => item.completed).length}
        </div>
        <div>
          ✅ Of Uncompleted Items:{" "}
          {items.filter((item) => !item.completed).length}
        </div>
      </section>
    </div>
  );
}
export default TodoFooter
