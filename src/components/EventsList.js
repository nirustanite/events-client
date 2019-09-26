import React from 'react'
import {Link} from 'react-router-dom'
import CreateEventFormContainer from './CreateEventFormContainer'

export default function EventsList(props){
    return(
        <div>
            <ul>
               {!props.events && 'Loading...'} 
               {props.events.map((event,i) => 
                 <li key={i}> 
                    <Link to={`/event/${event.id}`}>{event.name}</Link> 
                </li>
               )} 
            </ul>
            <CreateEventFormContainer />
        </div>
    )
}