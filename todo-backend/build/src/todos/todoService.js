"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(id) {
        return {
            id,
            title: 'Create App',
            description: 'Test App',
            isDone: true
        };
    }
    create(todoCreateParams) {
        return {
            id: 1,
            title: todoCreateParams.title,
            description: todoCreateParams.description,
            isDone: true
        };
    }
}
exports.TodoService = TodoService;
