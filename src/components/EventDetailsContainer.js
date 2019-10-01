import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {displayDetails, deleteEvent,updateEvent,eventToggle,submitEventEdit,changeEvent} from '../actions/events'

class EventDetailsContainer extends React.Component{
    componentDidMount(){
        this.props.displayDetails(Number(this.props.match.params.id))
    }
    
    onDelete = () => {
       this.props.deleteEvent(this.props.eventDetail.id)
       this.props.history.push('/')
    }

    onEdit = () => {
        console.log(
            'this.props.updateEventToggle test:',
            this.props.updateEventToggle
        )
        this.props.eventToggle();
        console.log(this.props.updateEventToggle.editMode)
    }

    onChange = (event) => {
        this.props.changeEvent(event.target.name, event.target.value)
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.updateEvent(this.props.eventDetail.id,this.props.values)
        this.props.submitEventEdit()

    }

    render(){
        return (<EventDetails 
            eventDetail = {this.props.eventDetail}
            onDelete={this.onDelete}
            event={this.props.event}
            onEdit={this.onEdit}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            displayEvent = {this.props.updateEventToggle.editMode}
            formdata={this.props.formData}
            
        />)
    }
}


const mapStateToProps = (state) => ({
    eventDetail : state.eventDetail,
    formData: state.createEventForm,
    updateEventToggle: state.updateEvent,
    values: state.createEventForm
})

export default connect(mapStateToProps,{displayDetails, deleteEvent,updateEvent,eventToggle,submitEventEdit,changeEvent})(EventDetailsContainer)