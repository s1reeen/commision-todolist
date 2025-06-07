import module from "./Task.module.css";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contactsOps";
import { useState } from "react";
import EditTaskModal from "../EditTaskModal/EditTaskModal";

const Task = ({
  id,
  name,
  description,
  imageUrl,
  priority,
  completed = false,
}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => dispatch(deleteContact(id));
  const handleToggleComplete = () => {
    dispatch(
      updateContact({
        id,
        updatedData: {
          id,
          name,
          description,
          imageUrl,
          priority,
          completed: !completed,
        },
      })
    );
  };

  const priorityStyle =
    priority === "high"
      ? { borderColor: "#FFD700" }
      : priority === "low"
      ? { borderColor: "#A100FF" }
      : {};
  const placeholderImage = "https://via.placeholder.com/500?text=No+Image"; // Fallback placeholder

  return (
    <>
      <div className={module.task} style={priorityStyle}>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleComplete}
          className={module.checkbox}
        />
        <img
          src={imageUrl || placeholderImage}
          alt={name}
          className={module.image}
          onError={(e) => {
            e.target.src = placeholderImage;
          }} // Fallback if image fails to load
        />
        <div className={module.details}>
          <h3 className={module.name}>{name}</h3>
          <p className={module.description}>{description}</p>
        </div>
        <div className={module.actions}>
          <button
            className={module.editBtn}
            onClick={() => setIsModalOpen(true)}
          >
            <FaPencilAlt />
          </button>
          <button className={module.deleteBtn} onClick={handleDelete}>
            <FaTrash />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <EditTaskModal
          task={{ id, name, description, imageUrl, priority, completed }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Task;
