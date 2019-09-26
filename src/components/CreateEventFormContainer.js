import React from 'react'
import {connect} from 'react-redux'
import {changeEvent} from '../actions/events'
import {submitEvent} from '../actions/events'
import {createEvent} from '../actions/events'
import CreateEventForm from './CreateEventForm'


class CreateEventFormContainer extends React.Component{
     onChange = (event) => {
        this.props.changeEvent(event.target.name, event.target.value)
     }

     onSubmit = (event) => {
        event.preventDefault()
        this.props.createEvent(this.props.values)
        this.props.submitEvent()
     }

     render(){
         console.log('this.props.createEvent test:', this.props.createEvent)
         return (
             <CreateEventForm
             onSubmit = {this.onSubmit}
             onChange = {this.onChange}
             values={this.props.values}/>
         )
     }
}

const mapStateToProps = (state) => {
    console.log('state.createEvent test:', state.createEvent)
    return{
        values: state.createEventForm
    }
}

export default connect(mapStateToProps,{changeEvent,submitEvent,createEvent})(CreateEventFormContainer)

