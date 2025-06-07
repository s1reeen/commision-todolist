import module from "./TaskList.module.css";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { selectFilteredTasks } from "../../redux/selectors";

const TaskList = () => {
  const filteredTasks = useSelector(selectFilteredTasks);

  return (
    <div className={module.taskList}>
      {filteredTasks?.map((task) => (
        <div key={task.id} className={module.taskCard}>
          <Task {...task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
