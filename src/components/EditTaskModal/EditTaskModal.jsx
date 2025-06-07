import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contactsOps";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import module from "./EditTaskModal.module.css";

const TaskFormSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3).max(50),
  priority: Yup.string()
    .oneOf(["high", "low", "normal"])
    .required("Priority is required"),
});

const EditTaskModal = ({ task, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      updateContact({ id: task.id, updatedData: { ...task, ...values } })
    );
    actions.resetForm();
    onClose();
  };

  return (
    <div className={module.overlay}>
      <div className={module.modal}>
        <h2>Edit Task</h2>
        <Formik
          initialValues={{
            name: task.name,
            description: task.description,
            imageUrl: task.imageUrl,
            priority: task.priority,
          }}
          validationSchema={TaskFormSchema}
          onSubmit={handleSubmit}
        >
          <Form className={module.form}>
            <div className={module.inputGroup}>
              <label className={module.label}>
                <span>Character Name</span>
                <Field type="text" name="name" className={module.input} />
                <ErrorMessage
                  className={module.error}
                  name="name"
                  component="span"
                />
              </label>
              <label className={module.label}>
                <span>Description</span>
                <Field
                  as="textarea"
                  name="description"
                  className={module.input}
                />
                <ErrorMessage
                  className={module.error}
                  name="description"
                  component="span"
                />
              </label>
              <label className={module.label}>
                <span>Image URL</span>
                <Field type="text" name="imageUrl" className={module.input} />
                <ErrorMessage
                  className={module.error}
                  name="imageUrl"
                  component="span"
                />
              </label>
              <label className={module.label}>
                <span>Priority</span>
                <Field as="select" name="priority" className={module.input}>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="low">Low</option>
                </Field>
                <ErrorMessage
                  className={module.error}
                  name="priority"
                  component="span"
                />
              </label>
            </div>
            <div className={module.buttonGroup}>
              <button type="submit" className={module.saveBtn}>
                Save
              </button>
              <button
                type="button"
                className={module.cancelBtn}
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditTaskModal;
