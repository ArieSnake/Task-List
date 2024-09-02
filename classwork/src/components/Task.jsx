import axios from "axios"

export const Task = ({ task, onRemove, onUpdate }) => {
    const handleRemove = () => {
        axios
        .delete('http://localhost:3009/tasks/' + task.id)
        .then(response => {
            onRemove(response.data.id)
        })
    }

    return (
        <div>
            <p>{task.text}</p>
            <small>status: {task.status}</small> 
            {
                task.status === 'completed'
                ? <img src="https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png" />
                : task.status === 'in progress'
                ? <img src="https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png" />
                : <img src="https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png" />
            }

            <select value={task.status} onChange={event => onUpdate(task.id, event.target.value)}>
                <option value="completed">completed</option>
                <option value="in progress">in progress</option>
                <option value="unstarted">unstarted</option>
            </select>
            <button className="remove-button" onClick={handleRemove}>X</button>
        </div>
    )
}



