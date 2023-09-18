
const API = "http://localhost:8080";

async function getEvents() {
    const result = await fetch(API + "/events");
    const events = await result.json();
    console.log(events);
    return events;
}

async function getEventById(id) {
    const result = await fetch(API + `/events/${id}`);
    const events = await result.json();
    console.log(events);
    return events;
}

async function addEvent(name, description, date, favorite) {
    const result = await fetch(API + `/addEvent/`, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            description: description,
            date: date,
            favorite: favorite
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
}

async function editEvent(id, name, description, date, favorite) {
    const result = await fetch(API + `/updateEvent/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            name: name,
            description: description,
            date: date,
            favorite: favorite
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
}

editEvent(27, "natty", "fcugcg", "2024-02-19", true);

async function deleteEvent(id) {
    const result = await fetch(API + `/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result2 = await result.json();
    console.log(result2);
}

export {getEvents, getEventById, addEvent, deleteEvent, editEvent};