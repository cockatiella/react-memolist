import React from 'react'

export default function Memolist({ todos, setTodos, setEditTodo }) {

    const handleEdit = ({ id }) => {
        const findTodo = todos.find(todo => todo.id === id);
        setEditTodo(findTodo);
    }


    const handleComplete = (todo) => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        }));
    }

    const handleDelete = ({ id }) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>
                    <input
                        type='text'
                        value={todo.title}
                        className={`list ${todo.completed ? 'completed' : ''}`}
                        onChange={(e) =>
                            e.preventDefault()}
                    />
                    <div>
                        <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                            <i className="fas fa-check"></i>
                        </button>
                        <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                            <i className="fas fa-edit"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}