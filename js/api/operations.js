import {API_URL, API_KEY} from "./constants";

export const getOperations = (id, successCallback) => {
    fetch(`${API_URL}/tasks/${id}/operations`, {
        headers: {
            Authorization: API_KEY
        }
    })
        .then(result => result.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function"){
                successCallback(data.data)
            }
        })
        .catch(err => console.log(err))
}