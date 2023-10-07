import { useState } from "react";

let nextId = 0;

function TodoHeader({ items, setItems }) {
  const [name, setName] = useState("");

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      if (name.trim().length !== 0) {
        setItems([...items, { id: nextId++, text: name, completed: false }]);

        return setName("");
      } else if (name.trim().length === 0) {
        return alert("不可輸入空白");
      }
    }
  }

  function mouseClick() {
    if (name.trim().length !== 0) {
      setItems([...items, { id: nextId++, text: name, completed: false }]);

      return setName("");
    } else if (name.trim().length === 0) {
      return alert("不可輸入空白");
    }
  }

  return (
    <div>
      <input
        aria-label="todoHeader"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={handleKeyUp}
        type="text"
        placeholder="輸入後按 Enter or 添加鈕 確認"
      />
      <button onClick={mouseClick}>添加</button>
    </div>
  );
}
export default TodoHeader;
