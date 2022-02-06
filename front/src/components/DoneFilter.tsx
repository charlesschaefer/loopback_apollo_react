import React, { Component, ReactNode } from "react";

class DoneFilter extends Component<{onChange:Function}, {checked:boolean}> {
    state = {
        checked: false
    }

    onChange = (e:React.FormEvent<HTMLInputElement>):void => {
        const checked = !this.state.checked;
        this.setState({ checked });
        this.props.onChange(checked);
    }

    render() {
        return (
            <section className='done-filter'>
                <label>
                    <input type='checkbox' 
                        checked={this.state.checked} 
                        onChange={this.onChange} 
                    />
                </label>
            </section>
        )
    }
}

export default DoneFilter;