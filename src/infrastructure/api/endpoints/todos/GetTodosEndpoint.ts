import { TodoEntity } from "../../../../core/domain/entities/todo/TodoEntity";
import { IGetMethodEndpoint, ITodoDTO } from "../../common/types";
import { TodosMapper } from "../../mappers/TodosMapper";
import { GetMethod } from "../../methods/GetMethod";

export class GetTodosEndpoint
  extends GetMethod<ITodoDTO[]>
  implements IGetMethodEndpoint<TodoEntity[]>
{
  constructor() {
    super("mocks/todos/todos");
  }

  public async get(): Promise<TodoEntity[]> {
    const dtos = await super.handle();
    const entities = dtos.map((dto) => TodosMapper.fromDTO(dto));

    return entities;
  }
}
