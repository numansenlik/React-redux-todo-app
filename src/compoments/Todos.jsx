import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../store/todo/todoSlice";

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>
                <ul className="todo-list">
                    {todos.map((item, index) =>
                        <li key={index}>
                            <div className="wiew">
                                <input className="toggle" type="checkbox"  />
                                <label>{item.text}</label>
                                <button className="destroy" onClick={() => dispatch(removeTodo(index))}></button>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
            <footer className="footer">
                <span className="todo-count">
                    <strong>2</strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a href="#/" className="selected">All</a>
                    </li>
                    <li>
                        <a href="#/">Active</a>
                    </li>
                    <li>
                        <a href="#/">Completed</a>
                    </li>
                </ul>

                <button className="clear-completed">
                    Clear completed
                </button>
            </footer>
        </>
    )
}
export default Todos