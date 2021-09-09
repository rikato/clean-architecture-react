import { TodoEntity } from "../../../core/domain/entities/todo/TodoEntity";

const mockedTodos: TodoEntity[] = [
  TodoEntity.existing("t-1", "a", false),
  TodoEntity.existing("t-2", "b", false),
  TodoEntity.existing("t-3", "c", false),
];

export class TodoService {
  public async getAll(): Promise<TodoEntity[]> {
    return mockedTodos;
  }

  public async getById(uid: string): Promise<TodoEntity | undefined> {
    const todo = mockedTodos.find((t) => t._uid === uid);

    return todo;
  }

  public async update(todo: TodoEntity): Promise<void> {
    const todoIndex = mockedTodos.findIndex((t) => t._uid === todo._uid);

    mockedTodos[todoIndex] = todo;
  }
}
