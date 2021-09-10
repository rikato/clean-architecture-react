import { observer } from "mobx-react-lite";
import { TodoViewModel } from "../../../application/viewModels/todo/TodoViewModel";
import Todo from "../../molecules/Todo";

interface ITodosProps {
  todos: TodoViewModel[];
}

export const Todos: React.FC<ITodosProps> = observer(({ todos }) => {
  return (
    <>
      {todos.map((todoViewModel) => (
        <Todo
          title={todoViewModel.title}
          completed={todoViewModel.completed}
          onCompleted={() => todoViewModel.complete()}
        />
      ))}
    </>
  );
});
