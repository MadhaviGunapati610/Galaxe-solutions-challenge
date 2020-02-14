import React from 'react';

const FormComponent = (props) => {
    return (
        <div>
            <h1>My Name Form</h1>
            <form onSubmit={props.submitHandler}>
                <label htmlFor="name">Name: </label>
                <input type="text" value={props.value} onChange={(e)=>props.changeHandler(e.target.value)}/>{" "}
                <input type="submit" value="Submit"/>               
            </form>
        </div>
    )
}

export default FormComponent;
