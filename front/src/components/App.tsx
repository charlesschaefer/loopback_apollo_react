import React, { Component, ReactNode } from "react";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';

import "./App.css";

import Todo from "../types/Todo";
import AddTodoButton from "./AddTodoButton";
import DoneFilter from "./DoneFilter";
import SearchTodo from "./SearchTodo";
import TodoList from "./TodoList";
import TodoService from "../services/TodoService";
import { renderToStringWithData } from "@apollo/client/react/ssr";


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
            const todoList = this._filterCompleted(this.state.doneFilter, value.data.todos);

            this.setState({todoList: todoList, unfilteredTodoList: value.data.todos});

        });

        this.onDoneFilterChange = this.onDoneFilterChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    /**
     * Helper method to filter completed tasks if needed
     * @param showCompleted 
     * @returns 
     */
    _filterCompleted(showCompleted:boolean, unfilteredTodoList:Todo[]):Todo[] {
        if (!showCompleted) {
            return unfilteredTodoList.filter(
                (value:Todo, index:number) => !value.isComplete
            );
        }
        return unfilteredTodoList;
    }

    onDoneFilterChange(checked:boolean):void {
        // buscar as todos isCompleted = true
        let todoList = this._filterCompleted(checked, this.state.unfilteredTodoList);
       
        // filtrar apenas as todos da lista buscada
        this.setState({ todoList });
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
            <Container className="app" fluid>
                <Row>
                    <Col>
                        <header className="app-header contain mx-auto">
                            <h1>Todo App</h1>
                        </header>
                    </Col>
                </Row>
                <Container className="app-container">
                    <Row className="app-search">    
                        <DoneFilter onChange={this.onDoneFilterChange}/>
                        <SearchTodo onSearch={this.onSearch} />
                    </Row>
                    <Row>    
                        <TodoList list={this.state.todoList} />
                    </Row>
                    <Row>    
                        <AddTodoButton />
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default App;
