export default function TaskFilter({ filter, onFilterChange, total, showing }) {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div className="d-flex align-items-center gap-2">
                <span>Filter:</span>
                <select
                    className="form-select w-auto"
                    value={filter}
                    onChange={(e) => onFilterChange(e.target.value)}
                >
                    <option value="All">All Tasks</option>
                    <option value="Pending">Pending</option>
                    <option value="In-Progress">In-Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <small className="text-muted">
                Showing <b>{showing}</b> of <b>{total}</b> tasks
            </small>
        </div>
    );
}
