import { combineReducers } from 'redux'
import events from './events'
import createEventForm from './createEventForm'

export default combineReducers({
   events,
   createEventForm
})