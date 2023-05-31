import PropTypes from "prop-types"

const TaskFilter = ({handleSelectChange, handleTextChange}) => {
    return (
        <section className="custom-filter-section">
            <select 
                onChange={handleSelectChange}
                className="custom-filter-select"
            >
                <option value="1">Show all tasks</option>
                <option value="2">Show Done</option>
                <option value="3">Show Remain</option>
            </select>
    
            <input
                onChange={(e) => handleTextChange(e.target.value)}
                type="text"
                placeholder="Search..."
                className="custom-filter-input"
                name="search-tasks"
            />
        </section>
    )
  }
  
  TaskFilter.propTypes = {
    handleSelectChange: PropTypes.func.isRequired,
    handleTextChange: PropTypes.func.isRequired,
  }

  export default TaskFilter