import { observer } from "mobx-react-lite";
import React from "react";
import { useTodoViewModels } from "../../../application/hooks/useTodoViewModels";
import Todos from "../../molecules/Todos";

export const App: React.FC = observer(() => {
  const { todoViewModels } = useTodoViewModels();

  return <Todos todos={todoViewModels} />;
});
