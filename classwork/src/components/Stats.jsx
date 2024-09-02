export const Stats = ({ tasks }) => {
    const total = tasks.length
    const completed = tasks.filter(task => task.status === 'completed').length
    const inProgress = tasks.filter(task => task.status === 'in progress').length
    const unstarted = tasks.filter(task => task.status === 'unstarted').length

    return (
        <div className="stats">
            <h3>Statistics</h3>
            <div className="stats-item">
                <span className="stats-label">Completed:</span>
                <span className="stats-value">{completed} / {total}</span>
            </div>
            <div className="stats-item">
                <span className="stats-label">In Progress:</span>
                <span className="stats-value">{inProgress} / {total}</span>
            </div>
            <div className="stats-item">
                <span className="stats-label">Unstarted:</span>
                <span className="stats-value">{unstarted} / {total}</span>
            </div>
        </div>
    )
}
