import React from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { BiLeftArrowAlt, BiCheck } from 'react-icons/bi';

import TodoForm from '../todo-form/todo-form.component';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: {
                id: null,
                value: ''
            }
        }
    }

    submitUpdate = value => {
        const { edit } = this.state;

        this.props.updateTodo(edit.id, value);
        
        this.setState({edit: {
            id: null,
            value: ''
        }})
    }

    editState = value => {
        this.setState({edit: {
            id: value.id,
            value: value.text
        }})
    }


    render() {
        const { todos, completeTodo, removeTodo} = this.props;

        if (this.state.edit.id) {
            return <TodoForm edit={this.state.edit} onSubmit={this.submitUpdate} />
        }

        return todos.map((todo, index) => (
            <div 
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}
            >
                <div key ={todo.id}>
                    {todo.text}
                </div>
                <div className='icons'>
                    {
                        todo.isComplete ? (
                            <BiLeftArrowAlt className='uncheck-icon' onClick={() => completeTodo(todo.id)}/>
                        ) : (
                            <BiCheck className='check-icon' onClick={() => completeTodo(todo.id)}/>
                        )
                    }
                    <RiCloseCircleLine 
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon'
                    />
                    <TiEdit 
                        onClick={() => this.editState(todo)}
                        className='edit-icon'
                    />
                </div>
            </div>
        ));
    }
}


export default Todo;