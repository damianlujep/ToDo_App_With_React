import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import {getTasks} from "./api/tasks";

const App = () => {
    const [tasks, setTaks] = useState([]);

    useEffect(() => {
        getTasks(setTaks)
    },[])

    const newTaskHandler = (task) => {
        setTaks(prevState => [...prevState, task]);
    }

    const removeTaskHandler = (taskID) => {
        setTaks(prevState => prevState.filter(task => task.id !== taskID));
    }

    return (
        <>
            <NewTask onNewTask={newTaskHandler}/>
            {
                tasks.map(task => {
                    return <Task key={task.id} onRemoveTask={removeTaskHandler}/>;
                })
            }
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById("app"));