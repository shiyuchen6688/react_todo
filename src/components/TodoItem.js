import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
    getStyle = () => {
        let result = {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }

        this.props.todo.completed ?
            result.textDecoration = 'line-through' : result.textDecoration = 'none'
        return result;
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={e => { this.props.markComplete(id); }} />
                    {'  ' + title}
                    <button style={btnStyle}
                        onClick={e => { this.props.handleDeleteTask(id) }}>X</button>
                </p>
            </div >
        )
    }

}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: '1px',
    padding: '3px',
    cursor: 'pointer',
    float: 'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired
}

// const itemBackgroundColor = { backgroundColor: '#f4f4f4' };
export default TodoItem;