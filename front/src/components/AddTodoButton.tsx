import React, { Component } from "react";

class AddTodoButton extends Component {
    onClick = (e:React.FormEvent<HTMLButtonElement>) => {
        // como chamar o componente de popup?
    }
    
    render() {
        return (
            <section className="add-todo-button">
                <span>(+)</span>
                <button onClick={this.onClick}>Add Task</button>
            </section>
        )
    }
}

export default AddTodoButton;