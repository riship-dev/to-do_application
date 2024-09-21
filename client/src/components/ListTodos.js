import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
    const [ todos, setTodos ] = useState([]);
    const getTodos = async() => {
        try {
            const RESPONSE = await fetch("http://localhost:5000/todos");
            const JSON_DATA = await RESPONSE.json();
            setTodos(JSON_DATA);
        } catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todos => (
                        <tr key={todos.todo_id}>
                            <td>{todos.description}</td>
                            <td>edit</td>
                            <td>delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodos;