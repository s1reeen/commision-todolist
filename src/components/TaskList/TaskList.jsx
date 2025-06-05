import module from "./TaskList.module.css";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { selectFilteredTasks } from "../../redux/selectors"; // Already correct, but ensure it aligns with contacts

const TaskList = () => {
  const filteredTasks = useSelector(selectFilteredTasks);

  return (
    <ul className={module.list}>
      {filteredTasks?.map((task) => (
        <li className={module.listItem} key={task.id}>
          <Task
            id={task.id}
            name={task.name}
            description={task.description}
            imageUrl={task.imageUrl}
            priority={task.priority}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
