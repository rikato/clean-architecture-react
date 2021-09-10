import { TodoEntity } from "../../../core/domain/entities/todo/TodoEntity";
import { ITodoDTO } from "../common/types";

export class TodosMapper {
  public static fromDTO(dto: ITodoDTO) {
    return TodoEntity.existing(dto.uid, dto.title, dto.completed);
  }
}
