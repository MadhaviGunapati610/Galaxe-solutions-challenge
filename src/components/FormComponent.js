import React from 'react';

const FormComponent = (props) => {
    return (
        <div>
            <h1>My Name Form</h1>
            <form>
                <input type="text" value={props.value} onChange={(e)=>props.changeHandler(e.target.value)}/>                
            </form>
        </div>
    )
}

export default FormComponent;
