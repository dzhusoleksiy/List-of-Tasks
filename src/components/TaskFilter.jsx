import PropTypes from "prop-types"

const TaskFilter = ({handleSelectChange, handleTextChange}) => {
    return (
        <section className="custom-filter-section">
            <select 
                onChange={handleSelectChange}
                className="custom-filter-select"
            >
                <option value="1">Everything Everywhere All at Once</option>
                <option value="2">Finished Tasks</option>
                <option value="3">Remaining Tasks</option>
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