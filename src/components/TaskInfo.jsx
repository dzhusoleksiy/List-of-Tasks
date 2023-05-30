import PropTypes from 'prop-types';

const TaskInfo = ({tasks}) => {
  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const remain = total - done;
  let remainMessage = <span></span>
  let totalMessage = <span>There are {total} Tasks in the List</span>

  if (remain == 0) {
    remainMessage = <span>You Have Done Everything</span>
  } else if (remain == 1) {
    remainMessage = <span>{remain} Task is Still to be Done</span>
  } else {
    remainMessage = <span>{remain} Tasks are Still to be Done</span>
  }

  return (
    <div className="flex flex-row justify-around my-5 text-2xl bg-purple-300 shadow-md">
        <p className="">
        <span id="tasks-total">{totalMessage}</span>
        </p>
        <p className="">
        <span id="tasks-remain">{remainMessage}</span>
        </p>
    </div>
  )
}

TaskInfo.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskInfo