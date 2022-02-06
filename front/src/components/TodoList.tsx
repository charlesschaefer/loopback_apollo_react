import { Component } from "react";
import { TodoItem } from "./TodoItem";
import Todo from "../types/Todo";

class TodoList extends Component<{list:Todo[]},{}> {

    render() {
        const todoItems = this.props.list.map((item:Todo) => {
            <TodoItem item={item} />
        });

        return (
            <section id="todo-list-container">
                {todoItems}
            </section>
        );
    }
}

export default TodoList;