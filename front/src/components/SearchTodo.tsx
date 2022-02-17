import React, { ButtonHTMLAttributes, Component } from "react";
import { Button, Stack, Form } from "react-bootstrap";

declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

class SearchTodo extends Component<{onSearch:Function}, {searchTerm:string}> {
    state = {
        searchTerm: ''
    }

    onClick = (e: React.FormEvent<HTMLButtonElement>) => {
        this.props.onSearch(this.state.searchTerm);
    }

    onChange = (e:React.ChangeEvent<FormControlElement>) => {
        this.setState({searchTerm: e.currentTarget.value});
    }

    render() {
        return (
            <Stack direction="horizontal" className="search-todo">
                    <Form.Control 
                        className="search-field" 
                        value={this.state.searchTerm}
                        placeholder='Type to filter todos'
                        onChange={this.onChange}
                    />
                    <Button onClick={this.onClick}>Filter</Button>
            </Stack>
        )
    }
}

export default SearchTodo;