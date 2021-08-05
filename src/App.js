import React from 'react';

import TodoList from './components/todo-list/todo-list.component';

import './App.css';


const App = () => {
    return (
        <div className="todo-app">
            <TodoList />
        </div>
    );
}

export default App;
