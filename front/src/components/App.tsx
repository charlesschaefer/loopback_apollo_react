import React, { Component, ReactNode } from "react";
import Todo from "../types/Todo";
import AddTodoButton from "./AddTodoButton";
import DoneFilter from "./DoneFilter";
import SearchTodo from "./SearchTodo";
import TodoList from "./TodoList";

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:3000'
});

//import './App.css';

type AppState = {
    doneFilter:boolean,
    searchTerm:string,
    todoList: Todo[]
};

class App extends Component<{}, AppState> {
    state:AppState = {
        doneFilter: false,
        searchTerm: '',
        todoList:[]
    }

    unfilteredTodoList:Todo[] = [];

    onDoneFilterChange(checked:boolean):void {
        // buscar as todos isCompleted = true
    }

    onSearch(searchTerm:string) {
        const todoList = this.unfilteredTodoList.filter((value:Todo, index:number) => {
            const title = value.title.toLowerCase();
            if (title.indexOf(searchTerm.toLowerCase()) !== -1) {
                return true;
            }
            return false;
        });
        // filtrar apenas as todos da lista buscada
        this.setState({ todoList });
    }
    
    render() {
        return (
            <div id="app">
            <header className="App-header">
            <img src="/logo512.png" className="App-logo" alt="logo" />
            <h1>Todo App</h1>
            </header>
            <section className="app-container">
                <DoneFilter onChange={this.onDoneFilterChange}/>
                <SearchTodo onSearch={this.onSearch} />
                <TodoList list={this.state.todoList} />
                <AddTodoButton />
            </section>
            </div>
        );
    }
}

export default App;
