import { Component } from 'react';
import { Card, ListGroup, Form } from "react-bootstrap";

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
            <ListGroup.Item className="todo-item">
                <Form.Check type="checkbox"
                    checked={this.state.item.isComplete} 
                    onChange={this.onChange}
                    label={this.state.item.title}
                />
            </ListGroup.Item>
        );
    }
}

export {
    TodoItem
};
