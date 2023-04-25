import { RecoilRoot, atom } from "recoil";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export interface Todo {
  id: number;
  content: string;
}

export const todoStore = atom<Todo[]>({
  key: "todo",
  default: [],
});

function App() {
  return (
    <RecoilRoot>
      <TodoForm />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
