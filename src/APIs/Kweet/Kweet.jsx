// Backend https://localhost:5021
// Controller /api/kweet/

// POST to /api/kweet/create
const host = process.env.REACT_APP_HOST;

export async function create(message) {

    const requestOptions = {
        method: 'POST',
        headers: {
            Authorization: "Bearer " + window.sessionStorage.getItem("token"),
            'Content-Type' : 'application/json'  
        },
        body: JSON.stringify({
            Message : message,
        })
    };

    return fetch(host + '/api/kweet/create', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
}