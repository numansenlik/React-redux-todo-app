import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./compoments/AddTodo";
import Todos from "./compoments/Todos";


function App() {
  const store = useSelector(store => store.addTodo)
  console.log(store);
  return (
    <>
      <section className="todoapp">
        <AddTodo />
        <Todos />
      </section>
    </>
  )
}

export default App
