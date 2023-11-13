import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/todoSlice";


function AddTodo() {
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault();
        const inputValue = event.target.elements[0].value
        dispatch(addTodo(inputValue));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Todo Bilgisini Griniz " />
                <button type="submit">Ekle</button>
            </form>
        </>
    )
}
export default AddTodo