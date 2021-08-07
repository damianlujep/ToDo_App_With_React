import React, {useState} from 'react';
import {createNewTask} from "../api/tasks";

const NewTask = ({onNewTask}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const titleHandler = (e) => {
        if (e.target.value.length <= 2){
            setError("Title is too short")
        } else {
            setTitle(e.target.value);
            setError("");
        }
    }

    const descriptionHandler = (e) => {
        if (e.target.value.length <= 2){
            setError("Description is too short");
        } else {
            setDescription(e.target.value);
            setError("");
        }
    }

    const newTaskHandler = (e) => {
        e.preventDefault();

        if (title.length > 2 && description.length > 2){
            const newTask = {
                title: title,
                description: description,
                status: true
            }

            createNewTask(newTask, onNewTask);
        }
    }

    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form onSubmit={e => newTaskHandler(e)}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="title"
                               placeholder="Title"
                               onChange={e => titleHandler(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="description"
                               placeholder="Description"
                               onChange={e => descriptionHandler(e)}
                        />
                    </div>
                    <button className="btn btn-info">
                        Add task
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
                <span style={{color:"red"}}>{error}</span>
            </div>
        </div>

    );
};

export default NewTask;