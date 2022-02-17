import { Component } from "react";
import ReactLoading from "react-loading";
import { Row, ListGroup, Card } from "react-bootstrap";

import { TodoItem } from "./TodoItem";
import Todo from "../types/Todo";


class TodoList extends Component<{list:Todo[]},{}> {

    render() {
        const todoItems = this.props.list.map((item:Todo) => {
            return (<TodoItem item={item} key={item.id} />)
        });
        
        console.log(todoItems);

        return (
            <Row className="todo-list-container">
                <Card>
                    {this.props.list.length > 0 && 
                        <ListGroup variant="flush">{todoItems}</ListGroup>
                    }
                    
                    {this.props.list.length <= 0 && 
                        <div className="loading-block">
                            <ReactLoading type="spin" color="blue" height={150} width={150} />
                        </div>
                    }
                </Card>
            </Row>
        );
    }
}

export default TodoList;