import module from "./TaskForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const INITIAL_VALUES = {
  id: "",
  name: "",
  description: "",
  imageUrl: "",
  priority: "normal",
};

const TaskFormSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3).max(50),
  description: Yup.string(),
  imageUrl: Yup.string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
  priority: Yup.string()
    .oneOf(["high", "low", "normal"])
    .required("Priority is required"),
});

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values)); // Changed from addTask
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={TaskFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={module.form}>
        <label className={module.label}>
          <span className={module.span}>Character Name</span>
          <Field type="text" name="name" className={module.field} />
          <ErrorMessage className={module.error} name="name" component="span" />
        </label>
        <label className={module.label}>
          <span className={module.span}>Description</span>
          <Field as="textarea" name="description" className={module.field} />
          <ErrorMessage
            className={module.error}
            name="description"
            component="span"
          />
        </label>
        <label className={module.label}>
          <span className={module.span}>Image URL</span>
          <Field type="text" name="imageUrl" className={module.field} />
          <ErrorMessage
            className={module.error}
            name="imageUrl"
            component="span"
          />
        </label>
        <label className={module.label}>
          <span className={module.span}>Priority</span>
          <Field as="select" name="priority" className={module.field}>
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
        <button type="submit" className={module.btn}>
          Add Task
        </button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
