import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/todoSlice";


function AddTodo() {
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault();
        const inputValue = { done: false, text: event.target.elements[0].value }
        dispatch(addTodo(inputValue));
    }

    return (
        <>
            <header>
                <h1>todos</h1>
                <form onSubmit={handleSubmit}>
                    <input className="new-todo" type="text" placeholder="What needs to be done ?" autoFocus />
                </form>
            </header>
        </>
    )
}
export default AddTodo