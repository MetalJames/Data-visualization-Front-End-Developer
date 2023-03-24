import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const completeTodo = (id) => {
    const updateTodos= [...items].map((item) => {
      if(item.id === id) {
        item.completed = !item.completed
        const color = 'green'
        const lineThrough = 'line-through'
        item.value = <span style={{color: color, textDecoration: lineThrough}}>{item.value}</span>
      }
      return item
    })
    setItems(updateTodos)
  }

  const deleteItem = (id) => {
    const updatedList = items.filter(item => item.id !== id);
    setItems(updatedList);
  }

  return (
    <div style={{ width: '100%', textAlign: 'center'}}>
      <h1>Todo List</h1>
      <TodoForm setItems={setItems} newItem={newItem} setNewItem={setNewItem} />
      <TodoList items={items} deleteItem={deleteItem} completeTodo={completeTodo}/>
    </div>
  );
}

export default App;
