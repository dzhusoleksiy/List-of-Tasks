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
      toast.warn("Input task title!");
      return
    }
    const newTask = {id: id(), title: value, done: false};
    addTask(newTask).then(() => {
      setValue('');
      toast.success("Task has been added successfully!")
    });
  }

  return (
    <section className="flex flex-row w-max items-center">
        <p className="text-amber-600 self-center text-2xl px-4">Add task</p>
        <form onSubmit={handleSubmit} className="" autoComplete="off">
        <div>
            <input value={value} onChange={handleChange}
            type="text"
            name="title"
            id="title"
            placeholder="Add task"
            className="border border-gray-300 px-3 py-2 mr-4 bg-white focus:outline-none focus:border-gray-500"
            />
            <button
            type="submit"
            className="px-4 py-2 bg-blue-500 rounded-md text-white"
            >
            Add Task
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