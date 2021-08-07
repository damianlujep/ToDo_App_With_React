import {API_URL, API_KEY} from "./constants";

export const getTasks = (successCallback) => {
    fetch(`${API_URL}/tasks`, {
        headers: {
            'Authorization': API_KEY
        }
    })
        .then(data => data.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function"){
                successCallback(data.data)
            }
        })
        .catch(err => console.log(err));
}

export const createNewTask = (task, successCallback) => {
    fetch(`${API_URL}/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            'Authorization': API_KEY,
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function"){
                successCallback(data.data)
            }
        })
        .catch(err => console.log(err));
}

export const deleteTask = (id, successCallback) => {
    fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': API_KEY,
        }
    })
        .then(data => data.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function"){
                successCallback(data.data)
            }
        })
        .catch(err => console.log(err));
}