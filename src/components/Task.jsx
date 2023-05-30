import PropTypes from 'prop-types';
import { FaTrash, FaCheck, FaSave } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useRef, useEffect } from "react";

const Task = ({task, toggleTask, removeTask, updateTask, isUpdating, handleIsUpdated}) => {
    const [updateVal, setUpdateVal] = useState("")

    const inputRef = useRef();

    useEffect(() => {
        if (isUpdating) {
            inputRef.current.focus();
        }
    }, [isUpdating])

    const handleIsUpdating = (e) => {
        handleIsUpdated(task.id);
        setUpdateVal(task.title);
    }

    const handleUpdateVal = (e) => {
        setUpdateVal(e.target.value);
    }

    const handleClickUpdate = () => {
        updateTask(task.id, updateVal);
        handleIsUpdated(null);
    }

    let spanCls = 'grow mr-6';
    if (task.done) {
        spanCls += ' text-red-800 line-through'
    }

    const removeTaskHandle = () => {
        removeTask(task.id).then(() =>  toast.success("Task has been successfully deleted!"))
    }

    return (
        <li className="flex items-center p-2 mb-3 rounded-lg">
            <span onDoubleClick={handleIsUpdating} className={spanCls}>
                {isUpdating ? <input className='custom-input' onChange={handleUpdateVal} ref = {inputRef} value={updateVal}/> : task.title}
            </span>
            <div className='ml-auto flex'>
                <div onClick={handleClickUpdate} className='mr-3'>
                    <FaSave />
                </div>
            </div>
            <div className="ml-auto flex">
            <div onClick = {() => toggleTask(task.id)} className="mr-4">
                <FaCheck style={{color: task.done ? 'orange' : 'green'}} className="cursor-pointer" />
            </div>
            <div onClick = {removeTaskHandle}>
                <FaTrash className="cursor-pointer" />
            </div>
            </div>
            <ToastContainer />
        </li>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired,
    toggleTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    isUpdating: PropTypes.bool.isRequired,
    handleIsUpdated: PropTypes.func.isRequired,
};

export default Task