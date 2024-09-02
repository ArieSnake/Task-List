import { useState, useEffect } from "react"
import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"
import axios from "axios"

export const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3009/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении задач:', error);
            })
    }, [])

    
    const addTask = task => {
        setTasks([...tasks, task]);
    };

    
    const handleRemove = id => {
        setTasks(tasks.filter(task => task.id !== id));
    }


    const handleUpdate = (id, newStatus) => {
        axios
            .patch('http://localhost:3009/tasks/' + id, { status: newStatus })
            .then(response => {
                setTasks(tasks.map(task => task.id == response.data.id ? response.data : task));
            })
            
    }

    return (
        <div className="dashboard">
            <div className="row">
                <TaskList
                    tasks={tasks}
                    onRemove={handleRemove}
                    onUpdate={handleUpdate}  
                />
                <AddTask
                    onAddTask={addTask}
                />
            </div>
            <Stats
                tasks={tasks}  
            />
        </div>
    )
}
