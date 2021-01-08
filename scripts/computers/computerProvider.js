// Purpose: Communication between application and computers information within the local API

let computers = [];

export const getComputers = () => {
    fetch('http://localhost:8088/computers')
    .then(response = () => response.json())
    .then((parsedComputers) => computers = parsedComputers);
};

export const useComputers = () => computers.slice();

/*
// Saves new notes to the API
export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent);
};

// Deletes notes from the API
export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`,{
        method: "DELETE"
    })
    .then(getNotes);
};
*/