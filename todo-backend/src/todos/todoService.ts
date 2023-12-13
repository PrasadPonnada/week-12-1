import { Todo } from "./todo";

export type TodoCreateParams = Pick<Todo, "title" | "description">

export class TodoService {
    public get(id: number): Todo {
        return {
            id,
            title: 'Create App',
            description: 'Test App',
            isDone: true
        }
    }

    public create(todoCreateParams: TodoCreateParams): Todo {
        return {
            id: 1,
            title: todoCreateParams.title,
            description: todoCreateParams.description,
            isDone: true
        }
    }
}