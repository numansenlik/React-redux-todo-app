import { useDispatch, useSelector } from "react-redux"
import { changeChecked, clearCompleted, removeTodo, toggleAll } from "../store/todo/todoSlice";
import { useState } from "react";

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const [filter, setFilter] = useState("all");

    const filteredTodos = todos.filter((item) => {
        switch (filter) {
            case "active":
                return !item.done;
            case "completed":
                return item.done;
            default:
                return true;
        }
    });
    return (
        <>
            <section className="main">
                <input
                    className="toggle-all"
                    id="allInput"
                    type="checkbox"
                    checked={todos.length > 0 && todos.every((todo) => todo.done)}
                    onChange={() => dispatch(toggleAll())}
                />
                <label htmlFor="allInput">
                    Mark all as complete
                </label>
                <ul className="todo-list">
                    {filteredTodos.map((item, index) =>
                        <li key={index} className={item.done ? "completed" : ""}>
                            <div className="wiew">
                                <input className="toggle" type="checkbox" checked={item.done} onChange={() => dispatch(changeChecked(index))} />
                                <label>{item.text}</label>
                                <button className="destroy" onClick={() => dispatch(removeTodo(index))}></button>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{todos.filter((item) => !item.done).length}</strong> items left
                </span>

                <ul className="filters">
                    <li>
                        <a
                            href="#/"
                            className={filter === "all" ? "selected" : ""}
                            onClick={() => setFilter("all")}
                        >
                            All
                        </a>
                    </li>
                    <li>
                        <a
                            href="#/active"
                            className={filter === "active" ? "selected" : ""}
                            onClick={() => setFilter("active")}
                        >
                            Active
                        </a>
                    </li>
                    <li>
                        <a
                            href="#/completed"
                            className={filter === "completed" ? "selected" : ""}
                            onClick={() => setFilter("completed")}
                        >
                            Completed
                        </a>
                    </li>
                </ul>

                <button
                    className="clear-completed"
                    onClick={() => dispatch(clearCompleted())}
                    style={{ display: todos.some((todo) => todo.done) ? 'block' : 'none' }}
                >
                    Clear completed
                </button>
            </footer>
        </>
    )
}
export default Todos