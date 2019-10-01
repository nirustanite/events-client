import React from 'react'
import CreateEventForm from './CreateEventForm';

export default function EventDetail(props){
    console.log('props test:', props)
    console.log(props.eventDetail);
    return(
        <div>
            {!props.eventDetail && 'Loading'}
            {props.eventDetail && <h1>{props.eventDetail.name}</h1>}
            {props.eventDetail && <i>{props.eventDetail.date}</i>}
            {props.eventDetail && <p>{props.eventDetail.description}</p>}
            {props.eventDetail && <button onClick={props.onDelete}>Delete</button>}
            {props.eventDetail && <button onClick={props.onEdit}>Edit</button>}
            {props.displayEvent && <CreateEventForm values={props.formdata} onChange={props.onChange} onSubmit={props.onSubmit}/>}
        </div>
    )   
}