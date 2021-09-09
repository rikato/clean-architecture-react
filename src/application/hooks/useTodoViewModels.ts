import { TodosViewModel } from "../viewModels/todos/TodosViewModel";
import { useViewModel } from "./useViewModel";

export const useTodoViewModels = () => {
  const { viewModel } = useViewModel<TodosViewModel>(
    () => new TodosViewModel()
  );

  return { todoViewModels: viewModel.todos };
};
