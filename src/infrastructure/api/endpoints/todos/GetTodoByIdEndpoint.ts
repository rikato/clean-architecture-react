import { TodoEntity } from "../../../../core/domain/entities/todo/TodoEntity";
import { ITodoDTO } from "../../common/types";
import { TodosMapper } from "../../mappers/TodosMapper";
import { GetMethod } from "../../methods/GetMethod";
import { IGetByUidMethodEndpoint } from "../common/types";

export class GetTodoByIdEndpoint
  extends GetMethod<ITodoDTO>
  implements IGetByUidMethodEndpoint<TodoEntity>
{
  constructor() {
    super("mocks/todos");
  }

  public async getByUid(uid: string): Promise<TodoEntity> {
    const dto = await super.handle(uid);
    const entities = TodosMapper.fromDTO(dto);

    return entities;
  }
}
