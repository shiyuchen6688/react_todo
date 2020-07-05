import React from 'react';

class AddTask extends React.Component {
    state = {
        title: ''
    }

    handleChange = e => {
        this.setState(
            { [e.tartget.name]: e.target.value }
        )
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.handleChange}
                >
                </input>
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                >
                </input>
            </form>
        )

    }
}
export default AddTask;