export default function TaskCard({ task, onEdit, onDelete }) {
    const badgeClass = {
        Completed: "bg-success",
        "In-Progress": "bg-warning text-dark",
        Pending: "bg-secondary"
    }[task.status] || "bg-secondary";

    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{task.title}</h5>
                    <span className={`badge ${badgeClass}`}>{task.status}</span>
                </div>

                <p className="text-muted flex-grow-1">
                    {task.description || "No description"}
                </p>

                <div className="mt-3 d-flex gap-2">
                    <button className="btn btn-outline-primary btn-sm" onClick={() => onEdit(task)}>
                        Edit
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(task.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
