import PropTypes from 'prop-types';
import { useState } from "react";
import { toast } from 'react-toastify';
import { generate as id} from 'shortid';

const TaskForm = ({addTask}) => {

  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value.trim().length) {
      toast.warning("Type your task!");
      return
    }
    const newTask = {id: id(), title: value, done: false};
    addTask(newTask).then(() => {
      setValue('');
      toast.success("Task has been added successfully!")
    });
  }

  return (
    <section className="custom-new-task-section">
        <form onSubmit={handleSubmit} className="" autoComplete="off">
        <div>
            <input value={value} onChange={handleChange}
            type="text"
            name="title"
            id="title"
            placeholder="Your task is..."
            className="custom-new-input"
            />
            <button
            type="submit"
            className="custom-new-button"
            >
            Add
            </button>
        </div>
        </form>
    </section>
  )
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default TaskForm