import axios from "axios"
import { useState } from "react"

export const AddTask = ({onAddTask}) => {
    const [error, setError] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!text.trim()){
            return setError('Please write something')
        }
        setError('')
        axios
        .post('http://localhost:3009/tasks' , {text, status: 'unstarted'})
        .then(response => {
            onAddTask(response.data)
            setText('')
        })
        
    }
    return <div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <p>AddTask</p>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"
                    value={text}
                    placeholder="write a new Task please" 
                    onChange={event => setText(event.target.value)}
             />
             <button>save</button>
        </form>

    </div>
}