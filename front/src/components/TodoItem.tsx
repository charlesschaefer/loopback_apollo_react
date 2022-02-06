import { Component } from 'react';

import Todo from '../types/Todo';
import Person from '../types/Person';

type MyProps = {
    item: Todo;
};

class TodoItem extends Component<MyProps, {}> {
    state:MyProps;
    constructor(props:MyProps) {
        super(props);
        this.state = props;
    }
    onChange = (e:React.FormEvent<HTMLInputElement>) => {
        // needed to change on graphql
        let state:MyProps = {...this.state};
        state.item = {...this.state.item};
        state.item.isComplete = !this.state.item.isComplete;
        this.setState(state);

    }

    public render() {
        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={this.state.item.isComplete} 
                    onChange={this.onChange}
                />
                <label className="todo-title">
                    {this.state.item.title}
                </label>
            </div>
        );
    }
}

export {
    TodoItem
};
