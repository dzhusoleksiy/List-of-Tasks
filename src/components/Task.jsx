import PropTypes from 'prop-types';
import { FaTrash, FaCheck, FaSave, FaPencilAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
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

    let spanCls = 'grow mr-6 w-[860px]';
    if (task.done) {
        spanCls += ' text-purple-300 line-through'
    }

    const removeTaskHandle = () => {
        removeTask(task.id).then(() =>  toast.success("Task has been successfully deleted!"))
    }

    const handleTextArea = (e) => {
        let temp_value = e.target.value
        e.target.value = ''
        e.target.value = temp_value
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
    }

    return (
        <li className="custom-li">
            <div onClick = {() => toggleTask(task.id)} className="mr-4">
                <FaCheck size={20} style={{color: task.done ? 'rgba(196, 181, 253, var(--tw-text-opacity))' : 'rgba(139, 92, 246, var(--tw-text-opacity))'}} className="cursor-pointer" />
            </div>
            <span className={spanCls}>
                {isUpdating ? <textarea className='custom-input' onFocus={handleTextArea} onChange={handleUpdateVal} ref = {inputRef} value={updateVal}/> : <span className='custom-task'>{task.title}</span>}
            </span>
            <div className="custom-buttons">
                <div className='custom-button'>
                    {isUpdating ? 
                        <div onClick={handleIsUpdating} className='mr-3'>
                            <MdCancel size={24} className="cursor-pointer text-purple-500"/>
                        </div> 
                        :
                        <div onClick={handleIsUpdating} className='mr-3'>
                            <FaPencilAlt size={20} className="cursor-pointer text-purple-500"/>
                        </div>
                    }
                </div>
                <div className='custom-button'>
                    <div onClick={handleClickUpdate} className='mr-3'>
                        <FaSave size={20} className="cursor-pointer text-purple-500"/>
                    </div>
                </div>
                <div className="custom-button">
                    <div onClick = {removeTaskHandle}>
                        <FaTrash size={20} className="cursor-pointer text-purple-500" />
                    </div>
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