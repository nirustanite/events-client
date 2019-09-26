import React from 'react'

export default function CreateEventForm(props){
    return(
        <form>
            <label>
                Name:
                <input type="text" name='name' value={props.values.name} onChange={props.onChange}></input>
            </label>
            <label>
                Date:
                <input type="text" name='date' value={props.values.date} onChange={props.onChange}></input>
            </label>
            <label>
                Description:
                <input type="text" name='description' value={props.values.description} onChange={props.onChange}></input>
            </label>
            <button onClick={props.onSubmit}>Submit</button>
        </form>
    )
}