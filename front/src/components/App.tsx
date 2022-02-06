import React, { Component, ReactNode } from "react";
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Todo from "../types/Todo";
import AddTodoButton from "./AddTodoButton";
import DoneFilter from "./DoneFilter";
import SearchTodo from "./SearchTodo";
import TodoList from "./TodoList";
import TodoService from "../services/TodoService";


const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache
});


type AppState = {
    doneFilter:boolean,
    searchTerm:string,
    todoList: Todo[],
    unfilteredTodoList: Todo[]
};

class App extends Component<{}, AppState> {
    state:AppState = {
        doneFilter: false,
        searchTerm: '',
        todoList:[],
        unfilteredTodoList:[]
    }
    todoService:TodoService;

    constructor(props:any) {
        super(props);
        this.todoService = new TodoService(client);

        // loads all todos
        this.todoService.getTodos().then((value:any) => {
            this.setState({todoList: value.data.todos, unfilteredTodoList: value.data.todos});
        });
    }

    onDoneFilterChange(checked:boolean):void {
        // buscar as todos isCompleted = true
    }

    onSearch(searchTerm:string) {
        const todoList = this.state.unfilteredTodoList.filter((value:Todo, index:number) => {
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
