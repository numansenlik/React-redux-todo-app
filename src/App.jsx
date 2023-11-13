import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./compoments/AddTodo";


function App() {
  const store = useSelector(store => store.addTodo)
  console.log(store);
  return (
    <>
      <AddTodo />
    </>
  )
}

export default App
