import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/todoSlice";


function AddTodo() {
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault();
        const inputValue = event.target.elements[0].value.trim();
        if (inputValue !== '') {
            dispatch(addTodo({ done: false, text: inputValue }));
            event.target.firstChild.value = "";
        }
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