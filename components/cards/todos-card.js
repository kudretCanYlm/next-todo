

const TodosCard = ({ todos = [], className, deleteClick = id => id, updateClick = id => id }) => {

    return (
        <div className={`todos-card ${className}`}>
            <h2>ToDo's</h2>
            <div className="todo-board">
                <div className="top">
                    <h2>Todo</h2>
                    <h2>Delete</h2>
                    <h2>Update</h2>
                </div>

                <div className="center">

                    {
                        todos.length > 0 ?
                            todos.map((todo, key) => (
                                <div key={key} className="todo">
                                    <div className="text">
                                        <p>{todo.text}</p>
                                    </div>
                                    <div className="btn">
                                        <button onClick={() => deleteClick(todo.id)} className="btn-del">
                                            Delete
                                        </button>
                                        <button onClick={() => updateClick(todo.id)} className="btn-up">
                                            Update
                                        </button>
                                    </div>

                                </div>
                            )) :
                            (
                                <h2>
                                    There isn' any todo
                                </h2>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default TodosCard;