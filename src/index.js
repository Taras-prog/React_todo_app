import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1},
        { label: 'Learn React', important: true, id: 2},
        { label: 'Learn NodeJS', important: true, id: 3},
        { label: 'Learn English', important: true, id: 4},
        { label: 'Learn Python', important: false, id: 5},
    ]
  
    return ( 
    <div>
        <AppHeader />
        <SearchPanel />
        <TodoList todos={todoData}/>
    </div>
    )
};


ReactDOM.render(<App/>,  document.getElementById('root'));