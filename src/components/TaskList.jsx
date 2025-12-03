import TaskCard from "./Taskcard";

export default function TaskList({ tasks, onEdit, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div className="text-center py-5">
                <h5 className="text-muted">No tasks found. Create one!</h5>
            </div>
        );
    }

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {tasks.map((task) => (
                <div key={task.id} className="col">
                    <TaskCard task={task} onEdit={onEdit} onDelete={onDelete} />
                </div>
            ))}
        </div>
    );
}