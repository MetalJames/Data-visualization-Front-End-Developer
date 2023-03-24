import React, { useState } from 'react'

const TodoForm = ({ setItems, newItem, setNewItem }) => {

    const [emptyItem, setEmtyItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addItem = () => {

        if (!newItem) {
            setEmtyItem('PLEASE ENTER ITEMS NAME')
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000 ),
            value: newItem,
            completed: false,
        };

        setItems(items => [...items, item]);

        setEmtyItem('')
        setNewItem('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add item' value={newItem} onChange={(e) => setNewItem(e.target.value)} style={{marginRight: '2%'}}/>
            <button onClick={() => addItem()}>Add Item</button>
            <p>{emptyItem}</p>
        </form>
    )
}

export default TodoForm;