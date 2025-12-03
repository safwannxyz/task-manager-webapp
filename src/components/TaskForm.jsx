import { useState } from "react";

export default function TaskForm({ onSubmit, editingTask, onCancel }) {
    const [formData, setFormData] = useState(
        editingTask || { title: "", description: "", status: "Pending" }
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;
        onSubmit(formData);
    };

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h4>{editingTask ? "Edit Task" : "Add New Task"}</h4>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title *</label>
                        <input
                            name="title"
                            className="form-control"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            name="description"
                            className="form-control"
                            rows="3"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select
                            name="status"
                            className="form-select"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="Pending">Pending</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    <button className="btn btn-primary me-2">
                        {editingTask ? "Update" : "Add"} Task
                    </button>

                    {editingTask && (
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>
                            Cancel
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
