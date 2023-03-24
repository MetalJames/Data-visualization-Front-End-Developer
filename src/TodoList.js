import React from 'react'

const TodoList = ({ items, deleteItem, completeTodo }) => {

    return (
        <div style={{width: '50%', margin: 'auto'}}>
        <ul style={{display: 'flex', flexWrap: 'wrap'}}>
            {items.map(item=> (
                <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', width: '100%', marginTop: '20px'}}>
                    <li key={item.id}>{item.value}</li>
                    <div style={{display: 'flex'}}>
                        <button onClick={() => completeTodo(item.id)}>Complete</button>
                        <button onClick={() => deleteItem(item.id)} style={{marginLeft: '5%'}}>Delete</button>
                    </div>
                </div>
                
            ))}
        </ul>
        </div>
    )
}

export default TodoList