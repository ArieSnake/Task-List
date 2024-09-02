import { Task } from "./Task"

export const TaskList = ({ tasks, onRemove, onUpdate }) => {
    return <div>
        <h2 className="task-list-header">Task List</h2>
        <div className="list">
            {
                tasks.map(task => <Task key={task.id}
                                        task={task}
                                        onRemove={onRemove}
                                        onUpdate={onUpdate}
                                        />
                )
            }


        </div>
    </div>
}   