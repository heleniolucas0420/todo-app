import React, { createRef } from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef(null);

        this.state = {
            input: (props.edit ? props.edit.value : '')
        }
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleChange = event => {
        this.setState({input: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: this.state.input
        })

        this.setState({input: ''})
    }



    render() {
        return(
            <form className='todo-form' onSubmit={this.handleSubmit}>

                {
                    this.props.edit ? (
                        <div>
                            <input 
                                type='text'
                                placeholder='Update your item'
                                value={this.state.input}
                                name='text'
                                className='todo-input edit'
                                onChange={this.handleChange}
                                ref={this.inputRef}
                            />
                            <button className='todo-button edit'>Update</button>
                        </div>
                    ) : (
                        <div>
                            <input 
                                type='text'
                                placeholder='Add a todo'
                                value={this.state.input}
                                name='text'
                                className='todo-input'
                                onChange={this.handleChange}
                                ref={this.inputRef}
                            />
                            <button className='todo-button'>Add todo</button>
                        </div>
                    )
                }
            </form>
        );
    }
}

export default TodoForm;