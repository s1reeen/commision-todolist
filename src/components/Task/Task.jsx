import module from "./Task.module.css";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Task = ({ id, name, description, imageUrl, priority }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id)); // Changed from deleteTask

  const priorityStyle =
    priority === "high"
      ? { color: "#FFD700" }
      : priority === "low"
      ? { color: "#A100FF" }
      : { color: "#FFFFFF" };

  return (
    <div className={module.task} style={priorityStyle}>
      <img src={imageUrl} alt={name} className={module.image} />
      <div>
        <h3 className={module.name}>{name}</h3>
        <p className={module.description}>{description}</p>
      </div>
      <button type="button" className={module.btn} onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Task;
