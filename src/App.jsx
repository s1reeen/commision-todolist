import TaskList from "./components/TaskList/TaskList";
import SearchBox from "./components/SearchBox/SearchBox";
import TaskForm from "./components/TaskForm/TaskForm";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps"; // Changed from fetchTasks
import { selectError, selectLoading } from "./redux/selectors";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // Changed from fetchTasks
  }, [dispatch]);

  return (
    <div
      style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF", padding: "20px" }}
    >
      <h1 style={{ color: "#A100FF" }}>Commission To-Do List</h1>
      <TaskForm />
      <SearchBox />
      {loading && <p>Tasks are loading...</p>}
      {error && <p>Error: {error}</p>}
      <TaskList />
    </div>
  );
}

export default App;
