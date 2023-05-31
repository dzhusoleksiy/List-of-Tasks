import PropTypes from 'prop-types';

const TaskInfo = ({tasks}) => {
  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const remain = total - done;
  let remainMessage = <span></span>

  if (remain == 0) {
    remainMessage = <span>You Have Done Everything</span>
  } else if (remain == 1) {
    remainMessage = <span>{remain} Task is Still to be Done</span>
  } else {
    remainMessage = <span>{remain} Tasks are Still to be Done</span>
  }

  return (
    <section className="custom-task-section-info">
        <div className="custom-task-info"><p>There are {total} Tasks in the List</p></div>
        <div className="custom-task-info"><p>{remainMessage}</p></div>
    </section>
  )
}

TaskInfo.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskInfo