import TaskList from "./components/TaskList/TaskList";
import SearchBox from "./components/SearchBox/SearchBox";
import TaskForm from "./components/TaskForm/TaskForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/selectors";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1 className="title">Commission To-Do Hub</h1>
      {loading && <div className="loader"></div>}
      {error && <p className="error">{error}</p>}
      <TaskForm />
      <SearchBox />
      <TaskList />
    </div>
  );
}

export default App;
