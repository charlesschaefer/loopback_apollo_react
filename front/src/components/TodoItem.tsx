import { Component, ReactNode } from 'react';

import Todo from '../types/Todo';
import Person from '../types/Person';

type MyProps = {
    item: Todo;
};

class TodoItem extends Component<MyProps,{}> {
    public render():ReactNode {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.item.isComplete} />
                <label className="todo-title">
                    {this.props.item.title}
                </label>
            </div>
        );
    }
}

export {
    TodoItem
};
