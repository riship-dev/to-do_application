import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
    const [ description, setDescription ] = useState(todo.description);
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const BODY = { description };
            await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(BODY)
            })
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <button 
                type="button" 
                className="btn btn-warning" 
                data-bs-toggle="modal" 
                data-bs-target={`#id${todo.todo_id}`}
            >
                Edit
            </button>
            <div className="modal fade" id={`id${todo.todo_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Edit to-do</h4>
                            <button 
                                type="button" 
                                className="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close"
                                onClick={() => setDescription(todo.description)}
                            >
                            </button>
                        </div>
                        <div className="modal-body">
                            <input 
                                type="text" 
                                className="form-control" 
                                value={description} 
                                onChange={e => setDescription(e.target.value)} 
                            />
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-warning" 
                                data-bs-dismiss="modal"
                                onClick={e => updateDescription(e)}
                            >
                                Edit
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger" 
                                data-bs-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodo;
