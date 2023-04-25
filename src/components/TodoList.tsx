import { useRecoilValue } from "recoil";
import { todoStore } from "../App";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todo = useRecoilValue(todoStore);

  return (
    <section>
      {todo.map((v) => (
        <TodoItem data={v} key={`todoData_${v.id}`} />
      ))}
    </section>
  );
};

export default TodoList;
