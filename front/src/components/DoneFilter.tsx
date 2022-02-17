import React, { Component, ReactNode } from "react";
import { Row, Form } from "react-bootstrap";

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
            <Row className="done-filter">
                <Form.Group>
                    <Form.Label>
                        <Form.Check type="checkbox"
                            checked={this.state.checked} 
                            onChange={this.onChange} 
                            label="Show complete tasks"
                        />
                    </Form.Label>
                </Form.Group>
            </Row>
        )
    }
}

export default DoneFilter;