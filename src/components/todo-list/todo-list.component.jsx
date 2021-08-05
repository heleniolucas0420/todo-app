import React from 'react';

import TodoForm from '../todo-form/todo-form.component';
import Todo from '../todo/todo.component';

 
class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }

    addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...this.state.todos]

        this.setState({todos: newTodos}, () => console.log(this.state));
    }

    updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        console.log(this.state.todos);

        this.setState(prevState => {
            return {todos: prevState.todos.map(item => (item.id === todoId ? newValue : item))}
        })
    }

    removeTodo = id => {
        const { todos } = this.state;

        const removeArr = [...todos].filter(todo => todo.id !==id)

        this.setState({todos: removeArr});
    }

    completeTodo = id => {
        const { todos } = this.state;

        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        
        this.setState({todos: updatedTodos});
    }

    
    render() {
        return (
            <div>
                <h1>What's the Plan for Today?</h1>
                <TodoForm onSubmit={this.addTodo}/>
                <Todo 
                    todos={this.state.todos}
                    completeTodo={this.completeTodo}
                    removeTodo={this.removeTodo}
                    updateTodo={this.updateTodo}
                />
            </div>
        );
    }
}

export default TodoList;