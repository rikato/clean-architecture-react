import { observer } from "mobx-react-lite";
import React from "react";
import { useTodoViewModels } from "../../../application/hooks/useTodoViewModels";
import Todo from "../../molecules/Todo";

export const App: React.FC = observer(() => {
  const { todoViewModels } = useTodoViewModels();

  return (
    <>
      {todoViewModels.map((todoViewModel) => (
        <Todo
          title={todoViewModel.todo.title}
          completed={todoViewModel.todo.completed}
          onCompleted={() => todoViewModel.complete()}
        />
      ))}
    </>
  );
});
