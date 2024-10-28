import { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Title"
                onChange={(e) => {
                    const val = e.target.value;
                    setTitle(val);
                }}
            />
            <br />
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Description"
                onChange={(e) => {
                    const val = e.target.value;
                    setDescription(val);
                }}
            />
            <br />
            <button
                style={{ padding: 10, margin: 10 }}
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title, // corrected from tile to title
                            description: description
                        }),
                        headers: {
                            "Content-Type": "application/json" // Corrected header key
                        }
                    })
                    .then(async (res) => {
                        const json = await res.json();
                        alert("Todo added");
                    })
                    .catch(err => {
                        console.error('Error adding todo:', err);
                        alert("Failed to add todo");
                    });
                }}
            >
                Add a Todo
            </button>
        </div>
    );
}
