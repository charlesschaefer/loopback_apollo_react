import React, { ButtonHTMLAttributes, Component } from "react";

class SearchTodo extends Component<{onSearch:Function}, {searchTerm:string}> {
    state = {
        searchTerm: ''
    }

    onClick = (e: React.FormEvent<HTMLButtonElement>) => {
        this.props.onSearch(this.state.searchTerm);
    }

    onChange = (e:React.FormEvent<HTMLInputElement>) => {
        this.setState({searchTerm: e.currentTarget.value});
    }

    render() {
        return (
            <section className="search-todo">
                <input 
                    className="search-field"
                    value={this.state.searchTerm}
                    placeholder='Type to filter todos'
                    onChange={this.onChange}
                />
                <button onClick={this.onClick}>Filter</button>
            </section>
        )
    }
}

export default SearchTodo;