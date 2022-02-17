import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { BsPlusCircleFill } from "react-icons/bs";

class AddTodoButton extends Component {
    onClick = (e:React.FormEvent<HTMLButtonElement>) => {
        // como chamar o componente de popup?
    }
    
    render() {
        return (
            <section className="add-todo-button">
                <Button onClick={this.onClick}>
                    <BsPlusCircleFill></BsPlusCircleFill>
                    &nbsp;Add Task
                </Button>
            </section>
        )
    }
}

export default AddTodoButton;